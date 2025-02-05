export const toQueryString = <T extends Record<string, unknown>>(
  obj?: T
): string => {
  if (!obj) return "";
  const keyValuePairs = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== undefined) {
        keyValuePairs.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(String(value))
        );
      }
    }
  }

  return keyValuePairs.join("&");
};
