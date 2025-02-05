// import { fetchApi } from "@/configs/fetchApi";
import { LoginRequest } from "@/types/authenticate";

export const login = async (body: LoginRequest) => {
  // const response = await fetchApi.post<LoginResult>("/account/login", body);
  const { userNameOrEmailAddress, password } = body;
  if (
    userNameOrEmailAddress === "phuc6868@gmail.com" &&
    password === "@Phuc123"
  ) {
    return {
      result: "success",
      description: "login success",
    };
  } else {
    throw new Error("Invalid username or password");
  }
};

export const logout = async () => {
  // const response = await fetchApi.get("/account/logout");

  console.log("User has been logged out.");

  return {
    message: "Logout successful",
  };
};
