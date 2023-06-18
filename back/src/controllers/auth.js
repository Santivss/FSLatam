import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const token = jwt.sign(payload, "secretKey", {
    expiresIn: "60d",
  });

  return token;
};
