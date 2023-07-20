import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

export const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, {
    expiresIn: "60d",
  });

  return token;
};
