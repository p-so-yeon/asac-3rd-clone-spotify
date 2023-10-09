import getAuthSession from '../auth/getAuthSession'

const getFollowedArtists = async (limit: number): Promise<any> => {
  const baseUrl = 'https://api.spotify.com/v1'
  const session = await getAuthSession()
  if (session) {
    const url = `${baseUrl}/me/following?type=artist&limit=${limit}`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
    if (!res.ok) {
      throw new Error(`Fail to fetch data during ${getFollowedArtists.name}`)
    }
    const data = res.json()
    return data
  }
}

export default getFollowedArtists
