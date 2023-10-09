import getAuthSession from '../auth/getAuthSession'

const getAvailableGenreSeeds = async (): Promise<any> => {
  const baseUrl = 'https://api.spotify.com/v1'
  const session = await getAuthSession()
  if (session) {
    const url = `${baseUrl}/recommendations/available-genre-seeds`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
    if (!res.ok) {
      throw new Error(`Fail to fetch data during ${getAvailableGenreSeeds.name}`)
    }
    const data = res.json()
    return data
  }
}

export default getAvailableGenreSeeds
