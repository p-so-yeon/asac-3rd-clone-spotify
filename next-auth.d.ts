// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    // refreshTokenExpires?: number;
    // accessTokenExpires?: string;
    // refreshToken?: string;
    // token?: string;
    // error?: string;
    accessToken?: string;
    user?: User;
  }

  interface User extends DefaultUser {
    role?: string
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    refreshTokenExpires?: number;
    accessTokenExpires?: number;
    refreshToken?: string;
    accessToken?: string;
    exp?: number;
    iat?: number;
    jti?: string;
    error?: string
    user?: Session['user']
  }
}