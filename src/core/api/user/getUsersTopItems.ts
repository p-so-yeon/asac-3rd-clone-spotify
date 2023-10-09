import getAuthSession from '../auth/getAuthSession'

const getUsersTopItems = async (limit: number, type: 'artist' | 'track'): Promise<any> => {
  const baseUrl = 'https://api.spotify.com/v1'
  const session = await getAuthSession()
  if (session) {
    const url = `${baseUrl}/me/top/${type}?time_range=short_term&limit=${limit}`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
    if (!res.ok) {
      throw new Error(`Fail to fetch data during ${getUsersTopItems.name}`)
    }
    const data = res.json()
    return data
  }
}

export default getUsersTopItems
