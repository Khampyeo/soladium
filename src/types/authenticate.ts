export type LoginRequest = {
  userNameOrEmailAddress: string;
  password: string;
  rememberMe?: boolean;
};

export type LoginResult = {
  result: string;
  description: string;
};
