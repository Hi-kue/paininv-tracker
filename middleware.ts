export { NextAuth as middleware } from "@/app/pages/api/auth/[...nextauth]"; // TODO: Fix Issue with NextAuth

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*"]
}