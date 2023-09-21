import type { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider, { SpotifyProfile } from "next-auth/providers/spotify"
import fetch from "node-fetch";
// import { SpotifyProfile } from "next-auth/providers/spotify";

// Spotify web api
// https://developer.spotify.com/documentation/web-api/concepts/scopes
// 타사 앱을 사용하는 Spotify 사용자에게 공유하기로 선택한 정보의 범위
const scopes = [
  "ugc-image-upload",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-read-private",
  "user-top-read",
  "user-follow-read",
  "user-follow-modify",
  "user-read-email",
  "user-read-currently-playing",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-recently-played"
].join(",")

const params = {
  scope: scopes
}

async function refreshAccessToken(token: JWT) {
  // refreshing access token
  console.log("at refreshing access token jwt options", token);

  const params = new URLSearchParams()
  params.append("grant_type", "")
  params.append("refresh_token", token.refreshToken!)
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      'Authorization': 'Basic ' + (new (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET) as any).toString('base64'))
    },
    body: params
  })
  const data = await response.json()
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? token.refreshToken,
    accessTokenExpires: Date.now() + data.expires_in * 1000
  }
}

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + new URLSearchParams(params).toString()

export const options: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      /**
       * Request User Authorization
       * 첫 번째 단계는 사용자에게 승인을 요청하는 것입니다.
       * 그러면 앱이 해당 사용자를 대신하여 Spotify 리소스에 액세스할 수 있습니다.
       * 이를 위해 애플리케이션은 다음 매개변수를 사용하여
       * /authorize 엔드포인트에 GET 요청을 빌드하고 보내야 합니다.
       */
      authorization: LOGIN_URL,

      profile(profile: SpotifyProfile) {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images?.[0]?.url,
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/logout"
  },
  callbacks: {
    /**
     * 이 JWT 콜백은 
     * JWT이 생성되거나(즉, 로그인 시)
     * 업데이트될 때마다(즉, 클라이언트에서 세션에 액세스할 때마다) 
     * 호출됩니다.
     * 
     * e.g. /api/auth/signin, getSession(), useSession(), /api/auth/session
     * 사용자 ID, OAuth 액세스 토큰 등과 같은 데이터를 브라우저에 전달하려는 경우
     * 이를 토큰에 유지하고 session() 콜백을 사용하여 반환할 수 있습니다.
     */
    async jwt({ token, account }) {
      //user가 처음 로그인 한 경우
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.accessTokenExpires = account.expires_at
        console.log("at initial login jwt options", token);
        return token
      }

      // access token has not expired
      if (Date.now() < token.accessTokenExpires! * 1000) {
        console.log("at normal condition jwt options", token);
        return token
      }

      // access token has expired
      return refreshAccessToken(token)
    },
    async session({ session, token, user }) {
      session.access_token = token.access_token
      return session
    }
  }
}