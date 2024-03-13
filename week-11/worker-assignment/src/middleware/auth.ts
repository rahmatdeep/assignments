import { Context, Next } from "hono";
import { verify } from "hono/jwt";

enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  Forbidden = 403,
  ServorError = 500,
  InvalidCredentials = 401,
}

export default async function authMiddleWare(c: Context, next: Next) {
  console.log("mid");
  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    c.status(ResponseStatus.Forbidden);
    return c.json({ msg: "Access Denied" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = await verify(token, c.env.JWT_SECRET);
    c.set("userId", payload.id);
    console.log("passed");
    await next();
  } catch (e) {
    c.status(ResponseStatus.Forbidden);
    return c.json({ msg: "Access Denied" });
  }
}
