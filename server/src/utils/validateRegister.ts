import { UsernamePasswordInput } from "./UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [{ field: "email", message: "Invalid email." }];
  }
  if (options.username.length <= 2) {
    return [{ field: "username", message: "Must be greater than length 2." }];
  }

  if (options.username.includes("@")) {
    return [{ field: "username", message: "Invalid username" }];
  }

  if (options.password.length <= 2) {
    return [{ field: "password", message: "Must be greater than length 2." }];
  }

  return null;
};
