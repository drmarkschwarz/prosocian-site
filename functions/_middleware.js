export async function onRequest(context) {
  const { request, env } = context;

  const allowedUser = env.BASIC_AUTH_USER || "prosocian";
  const allowedPassword = env.BASIC_AUTH_PASSWORD;

  if (!allowedPassword) {
    return new Response("Missing password configuration.", { status: 500 });
  }

  const authorization = request.headers.get("Authorization") || "";

  if (authorization.startsWith("Basic ")) {
    try {
      const decoded = atob(authorization.slice(6));
      const separatorIndex = decoded.indexOf(":");

      const username = decoded.slice(0, separatorIndex);
      const password = decoded.slice(separatorIndex + 1);

      if (
        timingSafeEqual(username, allowedUser) &&
        timingSafeEqual(password, allowedPassword)
      ) {
        return context.next();
      }
    } catch (error) {
      // Fall through to authentication challenge.
    }
  }

  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Prosocian Private Site", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}
