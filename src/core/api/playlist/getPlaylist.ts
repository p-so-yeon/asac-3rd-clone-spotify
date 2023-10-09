import getAuthSession from '../auth/getAuthSession'

const getPlaylist = async (playlist_id: string): Promise<any> => {
  const baseUrl = 'https://api.spotify.com/v1'
  const session = await getAuthSession()
  if (session) {
    const url = `${baseUrl}/playlists/${playlist_id}`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
    if (!res.ok) {
      throw new Error(`Fail to fetch data during ${getPlaylist.name}`)
    }
    const data = res.json()
    return data
  }
}

export default getPlaylist
