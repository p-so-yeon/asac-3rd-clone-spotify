import getAuthSession from '../auth/getAuthSession'

const getRecommendations = async (artist_id: string, genre_array: string[], track_id: string): Promise<any> => {
  const baseUrl = 'https://api.spotify.com/v1'
  const session = await getAuthSession()
  const seed_genres = genre_array.slice(0, 3).join('%2C')
  if (session) {
    const url = `${baseUrl}/recommendations?seed_artists=${artist_id}&seed_genres=${seed_genres}&seed_tracks=${track_id}`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
    if (!res.ok) {
      throw new Error(`Fail to fetch data during ${getRecommendations.name} status code: ${res.status}`)
    }
    const data = res.json()
    return data
  }
}

export default getRecommendations
