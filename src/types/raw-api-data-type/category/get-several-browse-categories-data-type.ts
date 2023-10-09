export interface Getseveralbrowsecategories {
  categories: Categories
}

export interface Categories {
  href: string
  items: Item[]
  limit: number
  next: string
  offset: number
  previous: null
  total: number
}

export interface Item {
  href: string
  images: Image[]
  id: string
  name: string
}

export interface Image {
  height: number | null
  url: string
  width: number | null
}
