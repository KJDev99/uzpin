// app/api/telegram-auth/route.js
import crypto from "crypto";

export async function GET(request) {
  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams.entries());
  const { hash, ...userData } = params;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const secret = crypto.createHash("sha256").update(token).digest();

  const checkString = Object.keys(userData)
    .sort()
    .map((key) => `${key}=${userData[key]}`)
    .join("\n");

  const hmac = crypto
    .createHmac("sha256", secret)
    .update(checkString)
    .digest("hex");

  if (hmac !== hash) {
    return new Response(JSON.stringify({ error: "Invalid data" }), {
      status: 401,
    });
  }

  return new Response(
    JSON.stringify({ message: "Authentication successful", user: userData }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
