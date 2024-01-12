export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const getWindowDimensions = () => {
  if (typeof window === "undefined") return {innerWidth: 1, innerHeight: 1}
  console.log(window?.innerHeight, window?.innerWidth)
  return {
    innerWidth: window?.innerWidth || 0,
    innerHeight: window?.innerHeight || 0,
  };
};