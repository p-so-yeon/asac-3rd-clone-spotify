import getAuthSession from '../auth/getAuthSession'

const getSearchitem = async (item: string): Promise<any> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL
  const baseUrl2 = 'https://api.spotify.com/v1'
  const session = await getAuthSession()
  if (session) {
    const url = `${baseUrl2}/search?q=${item}&type=artist%2Ctrack%2Calbum&offset=10&limit=15`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
    if (!res.ok) {
      throw new Error(`Fail to fetch`)
    }
    const data = res.json()
    return data
  }
}

export default getSearchitem
