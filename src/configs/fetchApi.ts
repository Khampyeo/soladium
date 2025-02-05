import { ResponseError } from "@/types/common";
import { toQueryString } from "@/utils/toQueryStrings";

const fetchApi = async <T>(path: string, options?: RequestInit): Promise<T> => {
  const localOptions: RequestInit = {
    ...options,
    headers: {
      ...options?.headers,
    },
  };

  const response = await fetch(path, localOptions);

  const contentType = response.headers.get("Content-Type");

  if (!response.ok) {
    if (response.status === 401) {
      window.location.href =
        "/login?redirect=" + encodeURIComponent(window.location.pathname);
      return Promise.reject(new Error("401 Unauthorized"));
    }

    if ([400, 403, 500].includes(response.status)) {
      if (contentType?.startsWith("application/json")) {
        const data = await response.json();
        const error = data as ResponseError;
        if (error?.error?.message) {
          return Promise.reject(new Error(error.error.message));
        }
      }
    }

    return Promise.reject(new Error("General error."));
  }

  if (contentType?.startsWith("application/json")) {
    const data = await response.json();
    return data as T;
  }

  if (contentType?.startsWith("text/plain")) {
    const data = await response.text();
    return data as T;
  }

  return response as unknown as T;
};

// GET method with query parameters
fetchApi.get = <T>(path: string, params?: Record<string, unknown>) => {
  const query = params ? "?" + toQueryString(params) : "";
  return fetchApi<T>(path + query, {
    method: "GET",
  });
};

// POST method with JSON body
fetchApi.post = <T>(path: string, data?: unknown) => {
  return fetchApi<T>(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
};

// POST method with FormData body
fetchApi.postFormData = <T>(path: string, data: FormData) => {
  return fetchApi<T>(path, {
    method: "POST",
    body: data,
  });
};

// PUT method with JSON body
fetchApi.put = <T>(path: string, data?: unknown) => {
  return fetchApi<T>(path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
};

// DELETE method with query parameters
fetchApi.delete = <T>(path: string, params?: Record<string, unknown>) => {
  const query = params ? "?" + toQueryString(params) : "";
  return fetchApi<T>(path + query, {
    method: "DELETE",
  });
};

export { fetchApi };
