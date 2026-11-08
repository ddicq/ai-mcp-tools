import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const Telegram = {
  id: "telegram",
  name: "Telegram",
  type: "oidc" as const,
  issuer: "https://oauth.telegram.org",
  clientId: process.env.AUTH_TELEGRAM_ID!,
  clientSecret: process.env.AUTH_TELEGRAM_SECRET!,
  authorization: {
    params: {
      scope: "openid profile",
    },
  },
  checks: ["pkce", "state"] as ["pkce", "state"],
  idToken: true,
  profile(profile: Record<string, string>) {
    return {
      id: profile.sub || profile.id,
      name: profile.name || profile.preferred_username || "Telegram User",
      email: null,
      image: profile.picture || null,
    };
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google, Telegram],
  session: {
    strategy: "jwt",
  },
});
