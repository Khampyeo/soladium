export type ResponseError = {
  error?: {
    details?: string;
    message?: string;
    validationErrors?: { message?: string }[];
  };
};
