export const TOP_TRACKS_DATA = {}

export const TRACK_DATA = {
  album: {
    album_type: 'album',
    total_tracks: 9,
    id: '2ANVost0y2y52ema1E9xAZ',
    images: [
      {
        url: 'https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97',
        height: 640,
        width: 640,
      },
      {
        url: 'https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97',
        height: 300,
        width: 300,
      },
      {
        url: 'https://i.scdn.co/image/ab67616d00004851de437d960dda1ac0a3586d97',
        height: 64,
        width: 64,
      },
    ],
    name: 'Thriller',
    release_date: '1982-11-30',
    release_date_precision: 'day',
    type: 'album',
    artists: [
      {
        id: '3fMbdgg4jU18AjLCKBhRSm',
        name: 'Michael Jackson',
        type: 'artist',
      },
    ],
    'is_playable?': true,
  },
  artists: [
    {
      id: '3fMbdgg4jU18AjLCKBhRSm',
      name: 'Michael Jackson',
      type: 'artist',
    },
  ],
  disc_number: 1,
  duration_ms: 258399,
  explicit: false,
  id: '3BovdzfaX4jb5KFQwoPfAw',
  'is_playable?': true,
  name: 'Beat It',
  popularity: 78,
  preview_url:
    'https://p.scdn.co/mp3-preview/3b0b3eb44b3149bb49ae06dd64869e20e8c13380?cid=174e06ca11a84265b0cc2bb26a8ce545',
  track_number: 5,
  type: 'track',
  is_local: false,
}

export const RECENTLY_PLAYED_TRACK_DATA = {
  href: 'https://api.spotify.com/v1/me/player/recently-played?limit=1',
  limit: 1,
  next: 'https://api.spotify.com/v1/me/player/recently-played?before=1694395145672&limit=1',
  cursors: {
    after: '1694395145672',
    before: '1694395145672',
  },
  items: [
    {
      track: {
        album: {
          album_type: 'album',
          total_tracks: 9,
          external_urls: {
            spotify: 'https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ',
          },
          href: 'https://api.spotify.com/v1/albums/2ANVost0y2y52ema1E9xAZ',
          id: '2ANVost0y2y52ema1E9xAZ',
          images: [
            {
              url: 'https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97',
              height: 640,
              width: 640,
            },
            {
              url: 'https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97',
              height: 300,
              width: 300,
            },
            {
              url: 'https://i.scdn.co/image/ab67616d00004851de437d960dda1ac0a3586d97',
              height: 64,
              width: 64,
            },
          ],
          name: 'Thriller',
          release_date: '1982-11-30',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:2ANVost0y2y52ema1E9xAZ',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm',
              },
              href: 'https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm',
              id: '3fMbdgg4jU18AjLCKBhRSm',
              name: 'Michael Jackson',
              type: 'artist',
              uri: 'spotify:artist:3fMbdgg4jU18AjLCKBhRSm',
            },
          ],
          'is_playable?': true,
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm',
            },
            href: 'https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm',
            id: '3fMbdgg4jU18AjLCKBhRSm',
            name: 'Michael Jackson',
            type: 'artist',
            uri: 'spotify:artist:3fMbdgg4jU18AjLCKBhRSm',
          },
        ],
        disc_number: 1,
        duration_ms: 294226,
        explicit: false,
        external_ids: {
          isrc: 'USSM19902991',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7J1uxwnxfQLu4APicE5Rnj',
        },
        href: 'https://api.spotify.com/v1/tracks/7J1uxwnxfQLu4APicE5Rnj',
        id: '7J1uxwnxfQLu4APicE5Rnj',
        'is_playable?': true,
        name: 'Billie Jean',
        popularity: 80,
        preview_url:
          'https://p.scdn.co/mp3-preview/77cd91bbc7db184389223ea31ed9cd9b21ccd8df?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 6,
        type: 'track',
        uri: 'spotify:track:7J1uxwnxfQLu4APicE5Rnj',
        is_local: false,
      },
      played_at: '2023-09-11T01:19:05.672Z',
      context: null,
    },
  ],
}

export const RECOMMANDATION_TRACK_DATA = {
  tracks: [
    {
      album: {
        album_type: 'ALBUM',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB',
            },
            href: 'https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB',
            id: '3VQDqjQ4wJyw8PzpGdlZpB',
            name: 'Colde',
            type: 'artist',
            uri: 'spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5oA67QC0FjqXTSGy2kCSJp',
        },
        href: 'https://api.spotify.com/v1/albums/5oA67QC0FjqXTSGy2kCSJp',
        id: '5oA67QC0FjqXTSGy2kCSJp',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2734d1b7f66d0a67d55ba987e52',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e024d1b7f66d0a67d55ba987e52',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048514d1b7f66d0a67d55ba987e52',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Love Part 1',
        release_date: '2019-05-31',
        release_date_precision: 'day',
        total_tracks: 8,
        type: 'album',
        uri: 'spotify:album:5oA67QC0FjqXTSGy2kCSJp',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB',
          },
          href: 'https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB',
          id: '3VQDqjQ4wJyw8PzpGdlZpB',
          name: 'Colde',
          type: 'artist',
          uri: 'spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB',
        },
      ],
      disc_number: 1,
      duration_ms: 285000,
      explicit: false,
      external_ids: {
        isrc: 'QM6N21921545',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/6HIF87ra2YfFxwAziOFfgm',
      },
      href: 'https://api.spotify.com/v1/tracks/6HIF87ra2YfFxwAziOFfgm',
      id: '6HIF87ra2YfFxwAziOFfgm',
      is_local: false,
      is_playable: true,
      name: "Don't Leave Me, My Love",
      popularity: 48,
      preview_url:
        'https://p.scdn.co/mp3-preview/d67719fd8b2348d970fa44297c2b7b9aa10bc61a?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 8,
      type: 'track',
      uri: 'spotify:track:6HIF87ra2YfFxwAziOFfgm',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d',
            },
            href: 'https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d',
            id: '6HvZYsbFfjnjFrWF950C9d',
            name: 'NewJeans',
            type: 'artist',
            uri: 'spotify:artist:6HvZYsbFfjnjFrWF950C9d',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1HMLpmZAnNyl9pxvOnTovV',
        },
        href: 'https://api.spotify.com/v1/albums/1HMLpmZAnNyl9pxvOnTovV',
        id: '1HMLpmZAnNyl9pxvOnTovV',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209',
            width: 64,
          },
        ],
        is_playable: true,
        name: "NewJeans 1st EP 'New Jeans'",
        release_date: '2022-08-01',
        release_date_precision: 'day',
        total_tracks: 4,
        type: 'album',
        uri: 'spotify:album:1HMLpmZAnNyl9pxvOnTovV',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d',
          },
          href: 'https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d',
          id: '6HvZYsbFfjnjFrWF950C9d',
          name: 'NewJeans',
          type: 'artist',
          uri: 'spotify:artist:6HvZYsbFfjnjFrWF950C9d',
        },
      ],
      disc_number: 1,
      duration_ms: 177946,
      explicit: false,
      external_ids: {
        isrc: 'USA2P2230224',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/5expoVGQPvXuwBBFuNGqBd',
      },
      href: 'https://api.spotify.com/v1/tracks/5expoVGQPvXuwBBFuNGqBd',
      id: '5expoVGQPvXuwBBFuNGqBd',
      is_local: false,
      is_playable: true,
      name: 'Hurt',
      popularity: 78,
      preview_url:
        'https://p.scdn.co/mp3-preview/6df87f1a4b207f284916aa305f20a9eac0a88f75?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 4,
      type: 'track',
      uri: 'spotify:track:5expoVGQPvXuwBBFuNGqBd',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5a8EJtOEbUJDF4RX3mKK02',
            },
            href: 'https://api.spotify.com/v1/artists/5a8EJtOEbUJDF4RX3mKK02',
            id: '5a8EJtOEbUJDF4RX3mKK02',
            name: '우원재',
            type: 'artist',
            uri: 'spotify:artist:5a8EJtOEbUJDF4RX3mKK02',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/67d43ZuedVWtZMc4nOm90J',
        },
        href: 'https://api.spotify.com/v1/albums/67d43ZuedVWtZMc4nOm90J',
        id: '67d43ZuedVWtZMc4nOm90J',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27380af1bc4fa047ba0e2f17c04',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0280af1bc4fa047ba0e2f17c04',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485180af1bc4fa047ba0e2f17c04',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'We Are',
        release_date: '2017-09-04',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:67d43ZuedVWtZMc4nOm90J',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5a8EJtOEbUJDF4RX3mKK02',
          },
          href: 'https://api.spotify.com/v1/artists/5a8EJtOEbUJDF4RX3mKK02',
          id: '5a8EJtOEbUJDF4RX3mKK02',
          name: '우원재',
          type: 'artist',
          uri: 'spotify:artist:5a8EJtOEbUJDF4RX3mKK02',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/2e4G04F77jxVuDYo44TCSm',
          },
          href: 'https://api.spotify.com/v1/artists/2e4G04F77jxVuDYo44TCSm',
          id: '2e4G04F77jxVuDYo44TCSm',
          name: '로꼬',
          type: 'artist',
          uri: 'spotify:artist:2e4G04F77jxVuDYo44TCSm',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3kPEBSt7qgVoRZSbIXMr7W',
          },
          href: 'https://api.spotify.com/v1/artists/3kPEBSt7qgVoRZSbIXMr7W',
          id: '3kPEBSt7qgVoRZSbIXMr7W',
          name: 'GRAY',
          type: 'artist',
          uri: 'spotify:artist:3kPEBSt7qgVoRZSbIXMr7W',
        },
      ],
      disc_number: 1,
      duration_ms: 196020,
      explicit: false,
      external_ids: {
        isrc: 'KRC711700028',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/2SMq0lOqCTHayWa9juoI0d',
      },
      href: 'https://api.spotify.com/v1/tracks/2SMq0lOqCTHayWa9juoI0d',
      id: '2SMq0lOqCTHayWa9juoI0d',
      is_local: false,
      is_playable: true,
      name: 'We Are',
      popularity: 52,
      preview_url:
        'https://p.scdn.co/mp3-preview/9398092044589b20e158062eac0370b9aa304a37?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:2SMq0lOqCTHayWa9juoI0d',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0lgENJQUkqkDbpsTYEayOr',
            },
            href: 'https://api.spotify.com/v1/artists/0lgENJQUkqkDbpsTYEayOr',
            id: '0lgENJQUkqkDbpsTYEayOr',
            name: 'JUNNY',
            type: 'artist',
            uri: 'spotify:artist:0lgENJQUkqkDbpsTYEayOr',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6RkSKePFywXU4SlO2R0nRS',
        },
        href: 'https://api.spotify.com/v1/albums/6RkSKePFywXU4SlO2R0nRS',
        id: '6RkSKePFywXU4SlO2R0nRS',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27396c6f2356bf9ad60a9fd061f',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0296c6f2356bf9ad60a9fd061f',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485196c6f2356bf9ad60a9fd061f',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'By My Side',
        release_date: '2020-03-11',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:6RkSKePFywXU4SlO2R0nRS',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0lgENJQUkqkDbpsTYEayOr',
          },
          href: 'https://api.spotify.com/v1/artists/0lgENJQUkqkDbpsTYEayOr',
          id: '0lgENJQUkqkDbpsTYEayOr',
          name: 'JUNNY',
          type: 'artist',
          uri: 'spotify:artist:0lgENJQUkqkDbpsTYEayOr',
        },
      ],
      disc_number: 1,
      duration_ms: 206680,
      explicit: false,
      external_ids: {
        isrc: 'KRA382000590',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/6nzCvAtyADh0wwZEVMoujK',
      },
      href: 'https://api.spotify.com/v1/tracks/6nzCvAtyADh0wwZEVMoujK',
      id: '6nzCvAtyADh0wwZEVMoujK',
      is_local: false,
      is_playable: true,
      name: 'By My Side',
      popularity: 65,
      preview_url:
        'https://p.scdn.co/mp3-preview/29aca1fdd605262214459600c512f29949572184?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:6nzCvAtyADh0wwZEVMoujK',
    },
    {
      album: {
        album_type: 'ALBUM',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2frFGmni9tkRgXYdXmzQvR',
            },
            href: 'https://api.spotify.com/v1/artists/2frFGmni9tkRgXYdXmzQvR',
            id: '2frFGmni9tkRgXYdXmzQvR',
            name: '신용재',
            type: 'artist',
            uri: 'spotify:artist:2frFGmni9tkRgXYdXmzQvR',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0qZUGtDGH0QjnqXD1zvQym',
        },
        href: 'https://api.spotify.com/v1/albums/0qZUGtDGH0QjnqXD1zvQym',
        id: '0qZUGtDGH0QjnqXD1zvQym',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2733af5042f0c745c2b379eb82a',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e023af5042f0c745c2b379eb82a',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048513af5042f0c745c2b379eb82a',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'EMPATHY',
        release_date: '2016-10-13',
        release_date_precision: 'day',
        total_tracks: 8,
        type: 'album',
        uri: 'spotify:album:0qZUGtDGH0QjnqXD1zvQym',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/2frFGmni9tkRgXYdXmzQvR',
          },
          href: 'https://api.spotify.com/v1/artists/2frFGmni9tkRgXYdXmzQvR',
          id: '2frFGmni9tkRgXYdXmzQvR',
          name: '신용재',
          type: 'artist',
          uri: 'spotify:artist:2frFGmni9tkRgXYdXmzQvR',
        },
      ],
      disc_number: 1,
      duration_ms: 212164,
      explicit: false,
      external_ids: {
        isrc: 'KRA381601986',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/0uAW2Jb7ZjI5xUzaC0fhqT',
      },
      href: 'https://api.spotify.com/v1/tracks/0uAW2Jb7ZjI5xUzaC0fhqT',
      id: '0uAW2Jb7ZjI5xUzaC0fhqT',
      is_local: false,
      is_playable: true,
      name: '빌려줄게',
      popularity: 33,
      preview_url:
        'https://p.scdn.co/mp3-preview/ab5c4248c8dd4f685231661df609e9d2fabfe8d5?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:0uAW2Jb7ZjI5xUzaC0fhqT',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/29HqjVbJr3vsc2l6BTI4eB',
            },
            href: 'https://api.spotify.com/v1/artists/29HqjVbJr3vsc2l6BTI4eB',
            id: '29HqjVbJr3vsc2l6BTI4eB',
            name: '그루비룸',
            type: 'artist',
            uri: 'spotify:artist:29HqjVbJr3vsc2l6BTI4eB',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3046u4AKfbzmAxslPFkiP7',
        },
        href: 'https://api.spotify.com/v1/albums/3046u4AKfbzmAxslPFkiP7',
        id: '3046u4AKfbzmAxslPFkiP7',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27345774cf15941f6c0adafadb5',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0245774cf15941f6c0adafadb5',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485145774cf15941f6c0adafadb5',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'EVERYWHERE',
        release_date: '2017-07-24',
        release_date_precision: 'day',
        total_tracks: 7,
        type: 'album',
        uri: 'spotify:album:3046u4AKfbzmAxslPFkiP7',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/29HqjVbJr3vsc2l6BTI4eB',
          },
          href: 'https://api.spotify.com/v1/artists/29HqjVbJr3vsc2l6BTI4eB',
          id: '29HqjVbJr3vsc2l6BTI4eB',
          name: '그루비룸',
          type: 'artist',
          uri: 'spotify:artist:29HqjVbJr3vsc2l6BTI4eB',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5dCvSnVduaFleCnyy98JMo',
          },
          href: 'https://api.spotify.com/v1/artists/5dCvSnVduaFleCnyy98JMo',
          id: '5dCvSnVduaFleCnyy98JMo',
          name: '헤이즈',
          type: 'artist',
          uri: 'spotify:artist:5dCvSnVduaFleCnyy98JMo',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4XDi67ZENZcbfKnvMnTYsI',
          },
          href: 'https://api.spotify.com/v1/artists/4XDi67ZENZcbfKnvMnTYsI',
          id: '4XDi67ZENZcbfKnvMnTYsI',
          name: '박재범',
          type: 'artist',
          uri: 'spotify:artist:4XDi67ZENZcbfKnvMnTYsI',
        },
      ],
      disc_number: 1,
      duration_ms: 182300,
      explicit: false,
      external_ids: {
        isrc: 'KRA381701666',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/0JJeoiCAa1hwcBsPxBN2w4',
      },
      href: 'https://api.spotify.com/v1/tracks/0JJeoiCAa1hwcBsPxBN2w4',
      id: '0JJeoiCAa1hwcBsPxBN2w4',
      is_local: false,
      is_playable: true,
      name: 'SUNDAY (FEAT. 헤이즈, 박재범)',
      popularity: 47,
      preview_url:
        'https://p.scdn.co/mp3-preview/0391409e6b7d306cbdf0fc9211b728a955f0e440?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 2,
      type: 'track',
      uri: 'spotify:track:0JJeoiCAa1hwcBsPxBN2w4',
    },
    {
      album: {
        album_type: 'ALBUM',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/50Zu2bK9y5UAtD0jcqk5VX',
            },
            href: 'https://api.spotify.com/v1/artists/50Zu2bK9y5UAtD0jcqk5VX',
            id: '50Zu2bK9y5UAtD0jcqk5VX',
            name: '우효',
            type: 'artist',
            uri: 'spotify:artist:50Zu2bK9y5UAtD0jcqk5VX',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/598iBgNOh1cc2w0iSw2mfz',
        },
        href: 'https://api.spotify.com/v1/albums/598iBgNOh1cc2w0iSw2mfz',
        id: '598iBgNOh1cc2w0iSw2mfz',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273b4f16b17009fd796458dc955',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02b4f16b17009fd796458dc955',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851b4f16b17009fd796458dc955',
            width: 64,
          },
        ],
        is_playable: true,
        name: '소녀감성',
        release_date: '2014-05-15',
        release_date_precision: 'day',
        total_tracks: 8,
        type: 'album',
        uri: 'spotify:album:598iBgNOh1cc2w0iSw2mfz',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/50Zu2bK9y5UAtD0jcqk5VX',
          },
          href: 'https://api.spotify.com/v1/artists/50Zu2bK9y5UAtD0jcqk5VX',
          id: '50Zu2bK9y5UAtD0jcqk5VX',
          name: '우효',
          type: 'artist',
          uri: 'spotify:artist:50Zu2bK9y5UAtD0jcqk5VX',
        },
      ],
      disc_number: 1,
      duration_ms: 204594,
      explicit: false,
      external_ids: {
        isrc: 'GB32E1402510',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/5xX7oEKHN0H9VOjezo2ZaA',
      },
      href: 'https://api.spotify.com/v1/tracks/5xX7oEKHN0H9VOjezo2ZaA',
      id: '5xX7oEKHN0H9VOjezo2ZaA',
      is_local: false,
      is_playable: true,
      name: 'Vineyard',
      popularity: 42,
      preview_url:
        'https://p.scdn.co/mp3-preview/e9709a9a1afdce2dea2c8bc46b76e014292db3fd?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 3,
      type: 'track',
      uri: 'spotify:track:5xX7oEKHN0H9VOjezo2ZaA',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4z6yrDz5GfKXkeQZjOaZdq',
            },
            href: 'https://api.spotify.com/v1/artists/4z6yrDz5GfKXkeQZjOaZdq',
            id: '4z6yrDz5GfKXkeQZjOaZdq',
            name: '다비치',
            type: 'artist',
            uri: 'spotify:artist:4z6yrDz5GfKXkeQZjOaZdq',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0b22AbSdfn8WAreY3puAwL',
        },
        href: 'https://api.spotify.com/v1/albums/0b22AbSdfn8WAreY3puAwL',
        id: '0b22AbSdfn8WAreY3puAwL',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2737a2dbecc2fef9ab461ea80d1',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e027a2dbecc2fef9ab461ea80d1',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048517a2dbecc2fef9ab461ea80d1',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'To Me',
        release_date: '2017-10-11',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:0b22AbSdfn8WAreY3puAwL',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4z6yrDz5GfKXkeQZjOaZdq',
          },
          href: 'https://api.spotify.com/v1/artists/4z6yrDz5GfKXkeQZjOaZdq',
          id: '4z6yrDz5GfKXkeQZjOaZdq',
          name: '다비치',
          type: 'artist',
          uri: 'spotify:artist:4z6yrDz5GfKXkeQZjOaZdq',
        },
      ],
      disc_number: 1,
      duration_ms: 225816,
      explicit: false,
      external_ids: {
        isrc: 'KRA491700232',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/75hnKwGxK2FSAyBVGBDEMG',
      },
      href: 'https://api.spotify.com/v1/tracks/75hnKwGxK2FSAyBVGBDEMG',
      id: '75hnKwGxK2FSAyBVGBDEMG',
      is_local: false,
      is_playable: true,
      name: 'To Me',
      popularity: 25,
      preview_url:
        'https://p.scdn.co/mp3-preview/9f119bc266192d0119b464749e82d01f6051b600?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:75hnKwGxK2FSAyBVGBDEMG',
    },
    {
      album: {
        album_type: 'ALBUM',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU',
            },
            href: 'https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU',
            id: '3HqSLMAZ3g3d5poNaI7GOU',
            name: '아이유',
            type: 'artist',
            uri: 'spotify:artist:3HqSLMAZ3g3d5poNaI7GOU',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5V8n6fqyAPxvFTibPhQVcp',
        },
        href: 'https://api.spotify.com/v1/albums/5V8n6fqyAPxvFTibPhQVcp',
        id: '5V8n6fqyAPxvFTibPhQVcp',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273c06f0e8b33ac2d246158253e',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02c06f0e8b33ac2d246158253e',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851c06f0e8b33ac2d246158253e',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Palette',
        release_date: '2017-04-21',
        release_date_precision: 'day',
        total_tracks: 10,
        type: 'album',
        uri: 'spotify:album:5V8n6fqyAPxvFTibPhQVcp',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU',
          },
          href: 'https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU',
          id: '3HqSLMAZ3g3d5poNaI7GOU',
          name: '아이유',
          type: 'artist',
          uri: 'spotify:artist:3HqSLMAZ3g3d5poNaI7GOU',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/30b9WulBM8sFuBo17nNq9c',
          },
          href: 'https://api.spotify.com/v1/artists/30b9WulBM8sFuBo17nNq9c',
          id: '30b9WulBM8sFuBo17nNq9c',
          name: 'G-DRAGON',
          type: 'artist',
          uri: 'spotify:artist:30b9WulBM8sFuBo17nNq9c',
        },
      ],
      disc_number: 1,
      duration_ms: 217412,
      explicit: false,
      external_ids: {
        isrc: 'KRA381700862',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/3y7ByLZ05tluscOTRgEJ9Y',
      },
      href: 'https://api.spotify.com/v1/tracks/3y7ByLZ05tluscOTRgEJ9Y',
      id: '3y7ByLZ05tluscOTRgEJ9Y',
      is_local: false,
      is_playable: true,
      name: '팔레트 (feat. G-DRAGON)',
      popularity: 64,
      preview_url:
        'https://p.scdn.co/mp3-preview/000dc56c20c8dd1e1baece8f70506185067e6723?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 2,
      type: 'track',
      uri: 'spotify:track:3y7ByLZ05tluscOTRgEJ9Y',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1dOMFM5wDNsENQQW0nl0K8',
            },
            href: 'https://api.spotify.com/v1/artists/1dOMFM5wDNsENQQW0nl0K8',
            id: '1dOMFM5wDNsENQQW0nl0K8',
            name: '어반자카파',
            type: 'artist',
            uri: 'spotify:artist:1dOMFM5wDNsENQQW0nl0K8',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/2taCIMO9i00u0euzw9av9h',
        },
        href: 'https://api.spotify.com/v1/albums/2taCIMO9i00u0euzw9av9h',
        id: '2taCIMO9i00u0euzw9av9h',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273ff83be143e99d93f4eda5fd2',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02ff83be143e99d93f4eda5fd2',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851ff83be143e99d93f4eda5fd2',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Guardian (Original Television Soundtrack), Pt. 10',
        release_date: '2017-01-08',
        release_date_precision: 'day',
        total_tracks: 2,
        type: 'album',
        uri: 'spotify:album:2taCIMO9i00u0euzw9av9h',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1dOMFM5wDNsENQQW0nl0K8',
          },
          href: 'https://api.spotify.com/v1/artists/1dOMFM5wDNsENQQW0nl0K8',
          id: '1dOMFM5wDNsENQQW0nl0K8',
          name: '어반자카파',
          type: 'artist',
          uri: 'spotify:artist:1dOMFM5wDNsENQQW0nl0K8',
        },
      ],
      disc_number: 1,
      duration_ms: 236366,
      explicit: false,
      external_ids: {
        isrc: 'KRA491600939',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/04qqfjPWDqrg9q3HTToCfZ',
      },
      href: 'https://api.spotify.com/v1/tracks/04qqfjPWDqrg9q3HTToCfZ',
      id: '04qqfjPWDqrg9q3HTToCfZ',
      is_local: false,
      is_playable: true,
      name: 'Wish',
      popularity: 48,
      preview_url:
        'https://p.scdn.co/mp3-preview/f05f6870e64d961585e3b606a426915434222c94?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:04qqfjPWDqrg9q3HTToCfZ',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2YXlVLKq3X3soXd2aXUtIT',
            },
            href: 'https://api.spotify.com/v1/artists/2YXlVLKq3X3soXd2aXUtIT',
            id: '2YXlVLKq3X3soXd2aXUtIT',
            name: '제이미',
            type: 'artist',
            uri: 'spotify:artist:2YXlVLKq3X3soXd2aXUtIT',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0AbjDZZ4uenyuww3FJ6ZjZ',
        },
        href: 'https://api.spotify.com/v1/albums/0AbjDZZ4uenyuww3FJ6ZjZ',
        id: '0AbjDZZ4uenyuww3FJ6ZjZ',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2735665b5f249af532e14c4a31a',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e025665b5f249af532e14c4a31a',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048515665b5f249af532e14c4a31a',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'jiminxjamie',
        release_date: '2018-09-04',
        release_date_precision: 'day',
        total_tracks: 5,
        type: 'album',
        uri: 'spotify:album:0AbjDZZ4uenyuww3FJ6ZjZ',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/2YXlVLKq3X3soXd2aXUtIT',
          },
          href: 'https://api.spotify.com/v1/artists/2YXlVLKq3X3soXd2aXUtIT',
          id: '2YXlVLKq3X3soXd2aXUtIT',
          name: '제이미',
          type: 'artist',
          uri: 'spotify:artist:2YXlVLKq3X3soXd2aXUtIT',
        },
      ],
      disc_number: 1,
      duration_ms: 198312,
      explicit: false,
      external_ids: {
        isrc: 'US5TA1800064',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/248Ll9ghwujm1dOQI9H5jB',
      },
      href: 'https://api.spotify.com/v1/tracks/248Ll9ghwujm1dOQI9H5jB',
      id: '248Ll9ghwujm1dOQI9H5jB',
      is_local: false,
      is_playable: true,
      name: 'April Fools (0401)',
      popularity: 20,
      preview_url:
        'https://p.scdn.co/mp3-preview/625c0cfaf6048c46aa1e6dd1086af56192c87837?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:248Ll9ghwujm1dOQI9H5jB',
    },
    {
      album: {
        album_type: 'ALBUM',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5rGgflnIpRNizTCozbYBuY',
            },
            href: 'https://api.spotify.com/v1/artists/5rGgflnIpRNizTCozbYBuY',
            id: '5rGgflnIpRNizTCozbYBuY',
            name: '종현',
            type: 'artist',
            uri: 'spotify:artist:5rGgflnIpRNizTCozbYBuY',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6tYoidZViVVzSXG4jKEmNd',
        },
        href: 'https://api.spotify.com/v1/albums/6tYoidZViVVzSXG4jKEmNd',
        id: '6tYoidZViVVzSXG4jKEmNd',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273010ddb70a681fc13937611b2',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02010ddb70a681fc13937611b2',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851010ddb70a681fc13937611b2',
            width: 64,
          },
        ],
        is_playable: true,
        name: "종현 소품집 '이야기 Op.1'",
        release_date: '2015-09-17',
        release_date_precision: 'day',
        total_tracks: 9,
        type: 'album',
        uri: 'spotify:album:6tYoidZViVVzSXG4jKEmNd',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5rGgflnIpRNizTCozbYBuY',
          },
          href: 'https://api.spotify.com/v1/artists/5rGgflnIpRNizTCozbYBuY',
          id: '5rGgflnIpRNizTCozbYBuY',
          name: '종현',
          type: 'artist',
          uri: 'spotify:artist:5rGgflnIpRNizTCozbYBuY',
        },
      ],
      disc_number: 1,
      duration_ms: 275174,
      explicit: false,
      external_ids: {
        isrc: 'KRA301500451',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/5zkaZh7IKPfin3eRNkqfLQ',
      },
      href: 'https://api.spotify.com/v1/tracks/5zkaZh7IKPfin3eRNkqfLQ',
      id: '5zkaZh7IKPfin3eRNkqfLQ',
      is_local: false,
      is_playable: true,
      name: '산하엽 (Diphylleia Grayi)',
      popularity: 42,
      preview_url:
        'https://p.scdn.co/mp3-preview/d22c4c87d05ac69636c8c802ce0b33c88d25ca55?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 4,
      type: 'track',
      uri: 'spotify:track:5zkaZh7IKPfin3eRNkqfLQ',
    },
    {
      album: {
        album_type: 'ALBUM',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6UdKtISMXYKSR8jcgtFePo',
            },
            href: 'https://api.spotify.com/v1/artists/6UdKtISMXYKSR8jcgtFePo',
            id: '6UdKtISMXYKSR8jcgtFePo',
            name: 'Rad Museum',
            type: 'artist',
            uri: 'spotify:artist:6UdKtISMXYKSR8jcgtFePo',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/4IN4kuC0ut0BcdV3WNs8Tk',
        },
        href: 'https://api.spotify.com/v1/albums/4IN4kuC0ut0BcdV3WNs8Tk',
        id: '4IN4kuC0ut0BcdV3WNs8Tk',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2735bc885a152df34a37c39ec03',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e025bc885a152df34a37c39ec03',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048515bc885a152df34a37c39ec03',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Scene',
        release_date: '2017-10-26',
        release_date_precision: 'day',
        total_tracks: 7,
        type: 'album',
        uri: 'spotify:album:4IN4kuC0ut0BcdV3WNs8Tk',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/6UdKtISMXYKSR8jcgtFePo',
          },
          href: 'https://api.spotify.com/v1/artists/6UdKtISMXYKSR8jcgtFePo',
          id: '6UdKtISMXYKSR8jcgtFePo',
          name: 'Rad Museum',
          type: 'artist',
          uri: 'spotify:artist:6UdKtISMXYKSR8jcgtFePo',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3eCd0TZrBPm2n9cDG6yWfF',
          },
          href: 'https://api.spotify.com/v1/artists/3eCd0TZrBPm2n9cDG6yWfF',
          id: '3eCd0TZrBPm2n9cDG6yWfF',
          name: 'DEAN',
          type: 'artist',
          uri: 'spotify:artist:3eCd0TZrBPm2n9cDG6yWfF',
        },
      ],
      disc_number: 1,
      duration_ms: 191000,
      explicit: false,
      external_ids: {
        isrc: 'KRNAR1707813',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/4xudhJdYcZqWINzPMF14Pn',
      },
      href: 'https://api.spotify.com/v1/tracks/4xudhJdYcZqWINzPMF14Pn',
      id: '4xudhJdYcZqWINzPMF14Pn',
      is_local: false,
      is_playable: true,
      name: 'Tiny Little Boy (feat. DEAN)',
      popularity: 46,
      preview_url:
        'https://p.scdn.co/mp3-preview/7878f9ac40ff36c33f43f6a9b65d50020ad0775a?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 6,
      type: 'track',
      uri: 'spotify:track:4xudhJdYcZqWINzPMF14Pn',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4xF1D2cjWYquezD4TEx8DU',
            },
            href: 'https://api.spotify.com/v1/artists/4xF1D2cjWYquezD4TEx8DU',
            id: '4xF1D2cjWYquezD4TEx8DU',
            name: 'LIM YEON',
            type: 'artist',
            uri: 'spotify:artist:4xF1D2cjWYquezD4TEx8DU',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/2NNgVpg514V7BKOjzrt4bS',
        },
        href: 'https://api.spotify.com/v1/albums/2NNgVpg514V7BKOjzrt4bS',
        id: '2NNgVpg514V7BKOjzrt4bS',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2730471301bcb0ca1f4294564ef',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e020471301bcb0ca1f4294564ef',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048510471301bcb0ca1f4294564ef',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Hundred Million Stars from the Sky (Original Television Soundtrack), Pt. 3',
        release_date: '2018-11-15',
        release_date_precision: 'day',
        total_tracks: 2,
        type: 'album',
        uri: 'spotify:album:2NNgVpg514V7BKOjzrt4bS',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4xF1D2cjWYquezD4TEx8DU',
          },
          href: 'https://api.spotify.com/v1/artists/4xF1D2cjWYquezD4TEx8DU',
          id: '4xF1D2cjWYquezD4TEx8DU',
          name: 'LIM YEON',
          type: 'artist',
          uri: 'spotify:artist:4xF1D2cjWYquezD4TEx8DU',
        },
      ],
      disc_number: 1,
      duration_ms: 270000,
      explicit: false,
      external_ids: {
        isrc: 'KRA491801133',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/02PGjq5941KBldGbeGXkG0',
      },
      href: 'https://api.spotify.com/v1/tracks/02PGjq5941KBldGbeGXkG0',
      id: '02PGjq5941KBldGbeGXkG0',
      is_local: false,
      is_playable: true,
      name: 'Lost',
      popularity: 41,
      preview_url:
        'https://p.scdn.co/mp3-preview/1dd9833fc492972c271f99b40587f3d4faecda0d?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:02PGjq5941KBldGbeGXkG0',
    },
    {
      album: {
        album_type: 'ALBUM',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5dCvSnVduaFleCnyy98JMo',
            },
            href: 'https://api.spotify.com/v1/artists/5dCvSnVduaFleCnyy98JMo',
            id: '5dCvSnVduaFleCnyy98JMo',
            name: '헤이즈',
            type: 'artist',
            uri: 'spotify:artist:5dCvSnVduaFleCnyy98JMo',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/2xR7YEyRweqClzs50bbW3J',
        },
        href: 'https://api.spotify.com/v1/albums/2xR7YEyRweqClzs50bbW3J',
        id: '2xR7YEyRweqClzs50bbW3J',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27345c3e1eaeaed3345abae9616',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0245c3e1eaeaed3345abae9616',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485145c3e1eaeaed3345abae9616',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Undo',
        release_date: '2022-06-30',
        release_date_precision: 'day',
        total_tracks: 10,
        type: 'album',
        uri: 'spotify:album:2xR7YEyRweqClzs50bbW3J',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5dCvSnVduaFleCnyy98JMo',
          },
          href: 'https://api.spotify.com/v1/artists/5dCvSnVduaFleCnyy98JMo',
          id: '5dCvSnVduaFleCnyy98JMo',
          name: '헤이즈',
          type: 'artist',
          uri: 'spotify:artist:5dCvSnVduaFleCnyy98JMo',
        },
      ],
      disc_number: 1,
      duration_ms: 196576,
      explicit: false,
      external_ids: {
        isrc: 'KRMIM2236141',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/0O2ZW0yhiRQ3HKNCzGDzMj',
      },
      href: 'https://api.spotify.com/v1/tracks/0O2ZW0yhiRQ3HKNCzGDzMj',
      id: '0O2ZW0yhiRQ3HKNCzGDzMj',
      is_local: false,
      is_playable: true,
      name: 'Real LOVE',
      popularity: 28,
      preview_url:
        'https://p.scdn.co/mp3-preview/c7165fdde6b0905f696658efdfc6971be461331b?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 7,
      type: 'track',
      uri: 'spotify:track:0O2ZW0yhiRQ3HKNCzGDzMj',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB',
            },
            href: 'https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB',
            id: '3VQDqjQ4wJyw8PzpGdlZpB',
            name: 'Colde',
            type: 'artist',
            uri: 'spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0QtpxOft3xd0Ao8HHGLnRk',
        },
        href: 'https://api.spotify.com/v1/albums/0QtpxOft3xd0Ao8HHGLnRk',
        id: '0QtpxOft3xd0Ao8HHGLnRk',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27396daf380569ce47ccba097a7',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0296daf380569ce47ccba097a7',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485196daf380569ce47ccba097a7',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Control Me',
        release_date: '2019-09-05',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:0QtpxOft3xd0Ao8HHGLnRk',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB',
          },
          href: 'https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB',
          id: '3VQDqjQ4wJyw8PzpGdlZpB',
          name: 'Colde',
          type: 'artist',
          uri: 'spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB',
        },
      ],
      disc_number: 1,
      duration_ms: 204999,
      explicit: false,
      external_ids: {
        isrc: 'QM7281943091',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/1ffNBM0LCbHya4SezmmAH8',
      },
      href: 'https://api.spotify.com/v1/tracks/1ffNBM0LCbHya4SezmmAH8',
      id: '1ffNBM0LCbHya4SezmmAH8',
      is_local: false,
      is_playable: true,
      name: 'Control Me',
      popularity: 58,
      preview_url:
        'https://p.scdn.co/mp3-preview/2679dc928597062c1e7066360add16577790a47b?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:1ffNBM0LCbHya4SezmmAH8',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1qOPo6b0U3t7BpyO8Ti1MF',
            },
            href: 'https://api.spotify.com/v1/artists/1qOPo6b0U3t7BpyO8Ti1MF',
            id: '1qOPo6b0U3t7BpyO8Ti1MF',
            name: '니브',
            type: 'artist',
            uri: 'spotify:artist:1qOPo6b0U3t7BpyO8Ti1MF',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5GpSlTpb9A3F5D1hBJnBnG',
        },
        href: 'https://api.spotify.com/v1/albums/5GpSlTpb9A3F5D1hBJnBnG',
        id: '5GpSlTpb9A3F5D1hBJnBnG',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2735a8e0e194261522355b92304',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e025a8e0e194261522355b92304',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048515a8e0e194261522355b92304',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Tired',
        release_date: '2019-09-26',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:5GpSlTpb9A3F5D1hBJnBnG',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1qOPo6b0U3t7BpyO8Ti1MF',
          },
          href: 'https://api.spotify.com/v1/artists/1qOPo6b0U3t7BpyO8Ti1MF',
          id: '1qOPo6b0U3t7BpyO8Ti1MF',
          name: '니브',
          type: 'artist',
          uri: 'spotify:artist:1qOPo6b0U3t7BpyO8Ti1MF',
        },
      ],
      disc_number: 1,
      duration_ms: 229840,
      explicit: false,
      external_ids: {
        isrc: 'KRA251901420',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/7BWvtYsoM6KzgsXXVpYPqA',
      },
      href: 'https://api.spotify.com/v1/tracks/7BWvtYsoM6KzgsXXVpYPqA',
      id: '7BWvtYsoM6KzgsXXVpYPqA',
      is_local: false,
      is_playable: true,
      name: 'Tired',
      popularity: 47,
      preview_url:
        'https://p.scdn.co/mp3-preview/c29e627e56c9e25d38cc247ec04db203b2d84b5c?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:7BWvtYsoM6KzgsXXVpYPqA',
    },
    {
      album: {
        album_type: 'ALBUM',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5rGgflnIpRNizTCozbYBuY',
            },
            href: 'https://api.spotify.com/v1/artists/5rGgflnIpRNizTCozbYBuY',
            id: '5rGgflnIpRNizTCozbYBuY',
            name: '종현',
            type: 'artist',
            uri: 'spotify:artist:5rGgflnIpRNizTCozbYBuY',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3eHhVAhT8uCrEPlZywai3o',
        },
        href: 'https://api.spotify.com/v1/albums/3eHhVAhT8uCrEPlZywai3o',
        id: '3eHhVAhT8uCrEPlZywai3o',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273f9188f2ef472584851591023',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02f9188f2ef472584851591023',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851f9188f2ef472584851591023',
            width: 64,
          },
        ],
        is_playable: true,
        name: "종현 소품집 '이야기 Op.2'",
        release_date: '2017-04-24',
        release_date_precision: 'day',
        total_tracks: 9,
        type: 'album',
        uri: 'spotify:album:3eHhVAhT8uCrEPlZywai3o',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5rGgflnIpRNizTCozbYBuY',
          },
          href: 'https://api.spotify.com/v1/artists/5rGgflnIpRNizTCozbYBuY',
          id: '5rGgflnIpRNizTCozbYBuY',
          name: '종현',
          type: 'artist',
          uri: 'spotify:artist:5rGgflnIpRNizTCozbYBuY',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3qNVuliS40BLgXGxhdBdqu',
          },
          href: 'https://api.spotify.com/v1/artists/3qNVuliS40BLgXGxhdBdqu',
          id: '3qNVuliS40BLgXGxhdBdqu',
          name: '태연',
          type: 'artist',
          uri: 'spotify:artist:3qNVuliS40BLgXGxhdBdqu',
        },
      ],
      disc_number: 1,
      duration_ms: 244451,
      explicit: false,
      external_ids: {
        isrc: 'KRA301700193',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/5efB9wfc6dn3pzll9ElIrH',
      },
      href: 'https://api.spotify.com/v1/tracks/5efB9wfc6dn3pzll9ElIrH',
      id: '5efB9wfc6dn3pzll9ElIrH',
      is_local: false,
      is_playable: true,
      name: 'Lonely',
      popularity: 55,
      preview_url:
        'https://p.scdn.co/mp3-preview/8cd4a66f183bdec044b39be3ad76f6f466e9de77?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:5efB9wfc6dn3pzll9ElIrH',
    },
    {
      album: {
        album_type: 'ALBUM',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6zPbaYJp7itQ8p0gPLqf2S',
            },
            href: 'https://api.spotify.com/v1/artists/6zPbaYJp7itQ8p0gPLqf2S',
            id: '6zPbaYJp7itQ8p0gPLqf2S',
            name: '라디',
            type: 'artist',
            uri: 'spotify:artist:6zPbaYJp7itQ8p0gPLqf2S',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/475XE51GtR7fwso2v2323d',
        },
        href: 'https://api.spotify.com/v1/albums/475XE51GtR7fwso2v2323d',
        id: '475XE51GtR7fwso2v2323d',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2736dcef9780727cf8f2d995000',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e026dcef9780727cf8f2d995000',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048516dcef9780727cf8f2d995000',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'RealCollabo+RMX',
        release_date: '2009-07-15',
        release_date_precision: 'day',
        total_tracks: 7,
        type: 'album',
        uri: 'spotify:album:475XE51GtR7fwso2v2323d',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/6zPbaYJp7itQ8p0gPLqf2S',
          },
          href: 'https://api.spotify.com/v1/artists/6zPbaYJp7itQ8p0gPLqf2S',
          id: '6zPbaYJp7itQ8p0gPLqf2S',
          name: '라디',
          type: 'artist',
          uri: 'spotify:artist:6zPbaYJp7itQ8p0gPLqf2S',
        },
      ],
      disc_number: 1,
      duration_ms: 234613,
      explicit: false,
      external_ids: {
        isrc: 'KRA351000250',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/3emRnoz6sfuBDMtPl9THXT',
      },
      href: 'https://api.spotify.com/v1/tracks/3emRnoz6sfuBDMtPl9THXT',
      id: '3emRnoz6sfuBDMtPl9THXT',
      is_local: false,
      is_playable: true,
      name: 'I′m In Love (Piano RMX)',
      popularity: 43,
      preview_url:
        'https://p.scdn.co/mp3-preview/2174a9ad0842f4c0e9bd744103eff16a373ae670?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 4,
      type: 'track',
      uri: 'spotify:track:3emRnoz6sfuBDMtPl9THXT',
    },
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4XpUIb8uuNlIWVKmgKZXC0',
            },
            href: 'https://api.spotify.com/v1/artists/4XpUIb8uuNlIWVKmgKZXC0',
            id: '4XpUIb8uuNlIWVKmgKZXC0',
            name: '지코',
            type: 'artist',
            uri: 'spotify:artist:4XpUIb8uuNlIWVKmgKZXC0',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0aDnkPxX660ezxCWBcqzVo',
        },
        href: 'https://api.spotify.com/v1/albums/0aDnkPxX660ezxCWBcqzVo',
        id: '0aDnkPxX660ezxCWBcqzVo',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2737ac73c439819e81f544cc023',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e027ac73c439819e81f544cc023',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048517ac73c439819e81f544cc023',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'SoulMate (feat. IU)',
        release_date: '2018-07-30',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:0aDnkPxX660ezxCWBcqzVo',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4XpUIb8uuNlIWVKmgKZXC0',
          },
          href: 'https://api.spotify.com/v1/artists/4XpUIb8uuNlIWVKmgKZXC0',
          id: '4XpUIb8uuNlIWVKmgKZXC0',
          name: '지코',
          type: 'artist',
          uri: 'spotify:artist:4XpUIb8uuNlIWVKmgKZXC0',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU',
          },
          href: 'https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU',
          id: '3HqSLMAZ3g3d5poNaI7GOU',
          name: '아이유',
          type: 'artist',
          uri: 'spotify:artist:3HqSLMAZ3g3d5poNaI7GOU',
        },
      ],
      disc_number: 1,
      duration_ms: 219390,
      explicit: false,
      external_ids: {
        isrc: 'KRB461800410',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/1pz24zu5H9A0S1a2NKT4F0',
      },
      href: 'https://api.spotify.com/v1/tracks/1pz24zu5H9A0S1a2NKT4F0',
      id: '1pz24zu5H9A0S1a2NKT4F0',
      is_local: false,
      is_playable: true,
      name: 'SoulMate (feat. IU)',
      popularity: 57,
      preview_url:
        'https://p.scdn.co/mp3-preview/97a733c71f334d8107595382c9d05ac349e6e7ed?cid=174e06ca11a84265b0cc2bb26a8ce545',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:1pz24zu5H9A0S1a2NKT4F0',
    },
  ],
  seeds: [
    {
      initialPoolSize: 0,
      afterFilteringSize: 0,
      afterRelinkingSize: 0,
      id: 'kpop',
      type: 'GENRE',
      href: null,
    },
    {
      initialPoolSize: 535,
      afterFilteringSize: 535,
      afterRelinkingSize: 535,
      id: '5dCvSnVduaFleCnyy98JMo',
      type: 'ARTIST',
      href: 'https://api.spotify.com/v1/artists/5dCvSnVduaFleCnyy98JMo',
    },
    {
      initialPoolSize: 544,
      afterFilteringSize: 544,
      afterRelinkingSize: 544,
      id: '6FZAc2XaVYc8G8jaDnBshv',
      type: 'TRACK',
      href: 'https://api.spotify.com/v1/tracks/6FZAc2XaVYc8G8jaDnBshv',
    },
  ],
}

export const USERS_SAVED_TRACKS = {
  href: 'https://api.spotify.com/v1/me/tracks?offset=0&limit=20',
  items: [
    {
      added_at: '2023-09-07T10:36:58Z',
      track: {
        album: {
          album_type: 'compilation',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5pRYIkMQcy4a3C5BYtmuf3',
          },
          href: 'https://api.spotify.com/v1/albums/5pRYIkMQcy4a3C5BYtmuf3',
          id: '5pRYIkMQcy4a3C5BYtmuf3',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2737acd3e3099cfc7335abbc7b4',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e027acd3e3099cfc7335abbc7b4',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048517acd3e3099cfc7335abbc7b4',
              width: 64,
            },
          ],
          is_playable: true,
          name: "Appetite For Destruction / G N'R Lies / The Spaghetti Incident",
          release_date: '1987-07-21',
          release_date_precision: 'day',
          total_tracks: 32,
          type: 'album',
          uri: 'spotify:album:5pRYIkMQcy4a3C5BYtmuf3',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
            },
            href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
            id: '3qm84nBOXUEQ2vnTfUTTFC',
            name: "Guns N' Roses",
            type: 'artist',
            uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
          },
        ],
        disc_number: 1,
        duration_ms: 356066,
        explicit: true,
        external_ids: {
          isrc: 'USGF18714809',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7snQQk1zcKl8gZ92AnueZW',
        },
        href: 'https://api.spotify.com/v1/tracks/7snQQk1zcKl8gZ92AnueZW',
        id: '7snQQk1zcKl8gZ92AnueZW',
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: 'https://open.spotify.com/track/5r9AgnhkPQXeKG1w5rauDq',
          },
          href: 'https://api.spotify.com/v1/tracks/5r9AgnhkPQXeKG1w5rauDq',
          id: '5r9AgnhkPQXeKG1w5rauDq',
          type: 'track',
          uri: 'spotify:track:5r9AgnhkPQXeKG1w5rauDq',
        },
        name: "Sweet Child O' Mine",
        popularity: 87,
        preview_url:
          'https://p.scdn.co/mp3-preview/a941cdd2c0c74206aaa6d7e459e4fdf1d738deaa?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 9,
        type: 'track',
        uri: 'spotify:track:7snQQk1zcKl8gZ92AnueZW',
      },
    },
    {
      added_at: '2023-09-05T08:24:53Z',
      track: {
        album: {
          album_type: 'compilation',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of',
              },
              href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
              id: '0LyfQWJT6nXafLPZqxe9Of',
              name: 'Various Artists',
              type: 'artist',
              uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4WGcPCflN9FNccSu7tE9iS',
          },
          href: 'https://api.spotify.com/v1/albums/4WGcPCflN9FNccSu7tE9iS',
          id: '4WGcPCflN9FNccSu7tE9iS',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2739986d69836eac008a927b032',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e029986d69836eac008a927b032',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048519986d69836eac008a927b032',
              width: 64,
            },
          ],
          is_playable: true,
          name: 'Aladdin (Original Motion Picture Soundtrack)',
          release_date: '2019-05-22',
          release_date_precision: 'day',
          total_tracks: 37,
          type: 'album',
          uri: 'spotify:album:4WGcPCflN9FNccSu7tE9iS',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2Zi3RrdQqk63Xj0914STkS',
            },
            href: 'https://api.spotify.com/v1/artists/2Zi3RrdQqk63Xj0914STkS',
            id: '2Zi3RrdQqk63Xj0914STkS',
            name: 'Naomi Scott',
            type: 'artist',
            uri: 'spotify:artist:2Zi3RrdQqk63Xj0914STkS',
          },
        ],
        disc_number: 1,
        duration_ms: 208800,
        explicit: false,
        external_ids: {
          isrc: 'USWD11993077',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0XPsOSYzDJZJArevQNm2AR',
        },
        href: 'https://api.spotify.com/v1/tracks/0XPsOSYzDJZJArevQNm2AR',
        id: '0XPsOSYzDJZJArevQNm2AR',
        is_local: false,
        is_playable: true,
        name: 'Speechless (Full)',
        popularity: 71,
        preview_url:
          'https://p.scdn.co/mp3-preview/f44027924d0e0517b095033b2770c187de7c3974?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 12,
        type: 'track',
        uri: 'spotify:track:0XPsOSYzDJZJArevQNm2AR',
      },
    },
    {
      added_at: '2023-08-31T17:00:56Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/4UK2Lzi6fBfUi9rpDt6cik',
              },
              href: 'https://api.spotify.com/v1/artists/4UK2Lzi6fBfUi9rpDt6cik',
              id: '4UK2Lzi6fBfUi9rpDt6cik',
              name: 'Yorushika',
              type: 'artist',
              uri: 'spotify:artist:4UK2Lzi6fBfUi9rpDt6cik',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2jgZDVp8aoPDTAqxswhz9g',
          },
          href: 'https://api.spotify.com/v1/albums/2jgZDVp8aoPDTAqxswhz9g',
          id: '2jgZDVp8aoPDTAqxswhz9g',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2730fc9f40ffa270f17b66bcdac',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e020fc9f40ffa270f17b66bcdac',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048510fc9f40ffa270f17b66bcdac',
              width: 64,
            },
          ],
          is_playable: true,
          name: 'エルマ',
          release_date: '2019-08-28',
          release_date_precision: 'day',
          total_tracks: 14,
          type: 'album',
          uri: 'spotify:album:2jgZDVp8aoPDTAqxswhz9g',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4UK2Lzi6fBfUi9rpDt6cik',
            },
            href: 'https://api.spotify.com/v1/artists/4UK2Lzi6fBfUi9rpDt6cik',
            id: '4UK2Lzi6fBfUi9rpDt6cik',
            name: 'Yorushika',
            type: 'artist',
            uri: 'spotify:artist:4UK2Lzi6fBfUi9rpDt6cik',
          },
        ],
        disc_number: 1,
        duration_ms: 269613,
        explicit: false,
        external_ids: {
          isrc: 'JPPO01902974',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7rX3Gw6nyUuMjiZqe5jyr5',
        },
        href: 'https://api.spotify.com/v1/tracks/7rX3Gw6nyUuMjiZqe5jyr5',
        id: '7rX3Gw6nyUuMjiZqe5jyr5',
        is_local: false,
        is_playable: true,
        name: '雨とカプチーノ',
        popularity: 57,
        preview_url:
          'https://p.scdn.co/mp3-preview/fd90de2a99f8297e7cc782d2d6018235ffdb949c?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:7rX3Gw6nyUuMjiZqe5jyr5',
      },
    },
    {
      added_at: '2023-08-31T16:21:01Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6ydoSd3N2mwgwBHtF6K7eX',
              },
              href: 'https://api.spotify.com/v1/artists/6ydoSd3N2mwgwBHtF6K7eX',
              id: '6ydoSd3N2mwgwBHtF6K7eX',
              name: 'Calum Scott',
              type: 'artist',
              uri: 'spotify:artist:6ydoSd3N2mwgwBHtF6K7eX',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6Vip5A5NmEazvKuxj6GLYf',
          },
          href: 'https://api.spotify.com/v1/albums/6Vip5A5NmEazvKuxj6GLYf',
          id: '6Vip5A5NmEazvKuxj6GLYf',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273f2d671c22b70e01b78a618a8',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02f2d671c22b70e01b78a618a8',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851f2d671c22b70e01b78a618a8',
              width: 64,
            },
          ],
          is_playable: true,
          name: 'Only Human (Deluxe)',
          release_date: '2018-03-09',
          release_date_precision: 'day',
          total_tracks: 14,
          type: 'album',
          uri: 'spotify:album:6Vip5A5NmEazvKuxj6GLYf',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6ydoSd3N2mwgwBHtF6K7eX',
            },
            href: 'https://api.spotify.com/v1/artists/6ydoSd3N2mwgwBHtF6K7eX',
            id: '6ydoSd3N2mwgwBHtF6K7eX',
            name: 'Calum Scott',
            type: 'artist',
            uri: 'spotify:artist:6ydoSd3N2mwgwBHtF6K7eX',
          },
        ],
        disc_number: 1,
        duration_ms: 204326,
        explicit: false,
        external_ids: {
          isrc: 'USUM71710315',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/69vToJ9BMbbLlFZo7k7A7B',
        },
        href: 'https://api.spotify.com/v1/tracks/69vToJ9BMbbLlFZo7k7A7B',
        id: '69vToJ9BMbbLlFZo7k7A7B',
        is_local: false,
        is_playable: true,
        name: 'You Are The Reason',
        popularity: 80,
        preview_url:
          'https://p.scdn.co/mp3-preview/b9e816a532d71bcd7a41b7c7068effa2f4d91c83?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:69vToJ9BMbbLlFZo7k7A7B',
      },
    },
    {
      added_at: '2023-08-31T16:16:24Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6ydoSd3N2mwgwBHtF6K7eX',
              },
              href: 'https://api.spotify.com/v1/artists/6ydoSd3N2mwgwBHtF6K7eX',
              id: '6ydoSd3N2mwgwBHtF6K7eX',
              name: 'Calum Scott',
              type: 'artist',
              uri: 'spotify:artist:6ydoSd3N2mwgwBHtF6K7eX',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6Vip5A5NmEazvKuxj6GLYf',
          },
          href: 'https://api.spotify.com/v1/albums/6Vip5A5NmEazvKuxj6GLYf',
          id: '6Vip5A5NmEazvKuxj6GLYf',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273f2d671c22b70e01b78a618a8',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02f2d671c22b70e01b78a618a8',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851f2d671c22b70e01b78a618a8',
              width: 64,
            },
          ],
          is_playable: true,
          name: 'Only Human (Deluxe)',
          release_date: '2018-03-09',
          release_date_precision: 'day',
          total_tracks: 14,
          type: 'album',
          uri: 'spotify:album:6Vip5A5NmEazvKuxj6GLYf',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6ydoSd3N2mwgwBHtF6K7eX',
            },
            href: 'https://api.spotify.com/v1/artists/6ydoSd3N2mwgwBHtF6K7eX',
            id: '6ydoSd3N2mwgwBHtF6K7eX',
            name: 'Calum Scott',
            type: 'artist',
            uri: 'spotify:artist:6ydoSd3N2mwgwBHtF6K7eX',
          },
        ],
        disc_number: 1,
        duration_ms: 260285,
        explicit: false,
        external_ids: {
          isrc: 'UK6KW1500205',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/2BOqDYLOJBiMOXShCV1neZ',
        },
        href: 'https://api.spotify.com/v1/tracks/2BOqDYLOJBiMOXShCV1neZ',
        id: '2BOqDYLOJBiMOXShCV1neZ',
        is_local: false,
        is_playable: true,
        name: 'Dancing On My Own',
        popularity: 81,
        preview_url:
          'https://p.scdn.co/mp3-preview/57dcf5872dc4e4a37f7a8761f09ae865728048cd?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 7,
        type: 'track',
        uri: 'spotify:track:2BOqDYLOJBiMOXShCV1neZ',
      },
    },
    {
      added_at: '2023-08-31T09:47:44Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm',
              },
              href: 'https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm',
              id: '3fMbdgg4jU18AjLCKBhRSm',
              name: 'Michael Jackson',
              type: 'artist',
              uri: 'spotify:artist:3fMbdgg4jU18AjLCKBhRSm',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/7pomP86PUhoJpY3fsC0WDQ',
          },
          href: 'https://api.spotify.com/v1/albums/7pomP86PUhoJpY3fsC0WDQ',
          id: '7pomP86PUhoJpY3fsC0WDQ',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273ed81569cdc08ab5c2dc5bd91',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02ed81569cdc08ab5c2dc5bd91',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851ed81569cdc08ab5c2dc5bd91',
              width: 64,
            },
          ],
          is_playable: true,
          name: 'XSCAPE',
          release_date: '2014-05-09',
          release_date_precision: 'day',
          total_tracks: 17,
          type: 'album',
          uri: 'spotify:album:7pomP86PUhoJpY3fsC0WDQ',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm',
            },
            href: 'https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm',
            id: '3fMbdgg4jU18AjLCKBhRSm',
            name: 'Michael Jackson',
            type: 'artist',
            uri: 'spotify:artist:3fMbdgg4jU18AjLCKBhRSm',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7',
            },
            href: 'https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7',
            id: '31TPClRtHm23RisEBtV3X7',
            name: 'Justin Timberlake',
            type: 'artist',
            uri: 'spotify:artist:31TPClRtHm23RisEBtV3X7',
          },
        ],
        disc_number: 1,
        duration_ms: 246026,
        explicit: false,
        external_ids: {
          isrc: 'USSM11401760',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/48td6xvpokdYwvbl3JIiXP',
        },
        href: 'https://api.spotify.com/v1/tracks/48td6xvpokdYwvbl3JIiXP',
        id: '48td6xvpokdYwvbl3JIiXP',
        is_local: false,
        is_playable: true,
        name: 'Love Never Felt So Good',
        popularity: 73,
        preview_url:
          'https://p.scdn.co/mp3-preview/3febaaf44131bbb57962fcf9ae1eea09df9b943d?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 17,
        type: 'track',
        uri: 'spotify:track:48td6xvpokdYwvbl3JIiXP',
      },
    },
    {
      added_at: '2023-08-29T12:08:38Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/1rpgxJZxZMLnFNc1Jmyov5',
              },
              href: 'https://api.spotify.com/v1/artists/1rpgxJZxZMLnFNc1Jmyov5',
              id: '1rpgxJZxZMLnFNc1Jmyov5',
              name: 'YB',
              type: 'artist',
              uri: 'spotify:artist:1rpgxJZxZMLnFNc1Jmyov5',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2wA8OXIv1JXX9kTY2ddfR4',
          },
          href: 'https://api.spotify.com/v1/albums/2wA8OXIv1JXX9kTY2ddfR4',
          id: '2wA8OXIv1JXX9kTY2ddfR4',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b27376205e74bef31f32a779d970',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e0276205e74bef31f32a779d970',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d0000485176205e74bef31f32a779d970',
              width: 64,
            },
          ],
          is_playable: true,
          name: 'REMIND',
          release_date: '2016-10-26',
          release_date_precision: 'day',
          total_tracks: 6,
          type: 'album',
          uri: 'spotify:album:2wA8OXIv1JXX9kTY2ddfR4',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1rpgxJZxZMLnFNc1Jmyov5',
            },
            href: 'https://api.spotify.com/v1/artists/1rpgxJZxZMLnFNc1Jmyov5',
            id: '1rpgxJZxZMLnFNc1Jmyov5',
            name: 'YB',
            type: 'artist',
            uri: 'spotify:artist:1rpgxJZxZMLnFNc1Jmyov5',
          },
        ],
        disc_number: 1,
        duration_ms: 201000,
        explicit: false,
        external_ids: {
          isrc: 'KRA341679206',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/1WFj1P1TUJJXH1R41PP9Vg',
        },
        href: 'https://api.spotify.com/v1/tracks/1WFj1P1TUJJXH1R41PP9Vg',
        id: '1WFj1P1TUJJXH1R41PP9Vg',
        is_local: false,
        is_playable: true,
        name: '흰수염고래 - 2016 Version',
        popularity: 38,
        preview_url:
          'https://p.scdn.co/mp3-preview/518dfe5455dd9c1098412a1f5977e24782e7abaf?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:1WFj1P1TUJJXH1R41PP9Vg',
      },
    },
    {
      added_at: '2023-08-29T02:47:57Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/4QQgXkCYTt3BlENzhyNETg',
              },
              href: 'https://api.spotify.com/v1/artists/4QQgXkCYTt3BlENzhyNETg',
              id: '4QQgXkCYTt3BlENzhyNETg',
              name: 'Earth, Wind & Fire',
              type: 'artist',
              uri: 'spotify:artist:4QQgXkCYTt3BlENzhyNETg',
            },
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/2FRfJyV85zb19tO6uiXBGl',
              },
              href: 'https://api.spotify.com/v1/artists/2FRfJyV85zb19tO6uiXBGl',
              id: '2FRfJyV85zb19tO6uiXBGl',
              name: 'sped up + slowed',
              type: 'artist',
              uri: 'spotify:artist:2FRfJyV85zb19tO6uiXBGl',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/3p90GIjEg4gXpnLmwGGvzI',
          },
          href: 'https://api.spotify.com/v1/albums/3p90GIjEg4gXpnLmwGGvzI',
          id: '3p90GIjEg4gXpnLmwGGvzI',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2730faf2fc17446651865ce2282',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e020faf2fc17446651865ce2282',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048510faf2fc17446651865ce2282',
              width: 64,
            },
          ],
          is_playable: true,
          name: 'September (sped up + slowed)',
          release_date: '1978-11-18',
          release_date_precision: 'day',
          total_tracks: 3,
          type: 'album',
          uri: 'spotify:album:3p90GIjEg4gXpnLmwGGvzI',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4QQgXkCYTt3BlENzhyNETg',
            },
            href: 'https://api.spotify.com/v1/artists/4QQgXkCYTt3BlENzhyNETg',
            id: '4QQgXkCYTt3BlENzhyNETg',
            name: 'Earth, Wind & Fire',
            type: 'artist',
            uri: 'spotify:artist:4QQgXkCYTt3BlENzhyNETg',
          },
        ],
        disc_number: 1,
        duration_ms: 216022,
        explicit: false,
        external_ids: {
          isrc: 'USSM17800845',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3kXoKlD84c6OmIcOLfrfEs',
        },
        href: 'https://api.spotify.com/v1/tracks/3kXoKlD84c6OmIcOLfrfEs',
        id: '3kXoKlD84c6OmIcOLfrfEs',
        is_local: false,
        is_playable: true,
        name: 'September',
        popularity: 81,
        preview_url:
          'https://p.scdn.co/mp3-preview/27390b5ac85b9dd997e8ae98a3356f0dd4a61f51?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:3kXoKlD84c6OmIcOLfrfEs',
      },
    },
    {
      added_at: '2023-08-26T13:47:25Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/5Vo1hnCRmCM6M4thZCInCj',
              },
              href: 'https://api.spotify.com/v1/artists/5Vo1hnCRmCM6M4thZCInCj',
              id: '5Vo1hnCRmCM6M4thZCInCj',
              name: 'OFFICIAL HIGE DANDISM',
              type: 'artist',
              uri: 'spotify:artist:5Vo1hnCRmCM6M4thZCInCj',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/17gzvH2FPpVhpuqalLFi9j',
          },
          href: 'https://api.spotify.com/v1/albums/17gzvH2FPpVhpuqalLFi9j',
          id: '17gzvH2FPpVhpuqalLFi9j',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2739c4ba827e585fabd3cfd90f2',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e029c4ba827e585fabd3cfd90f2',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048519c4ba827e585fabd3cfd90f2',
              width: 64,
            },
          ],
          is_playable: true,
          name: 'Traveler',
          release_date: '2019-08-31',
          release_date_precision: 'day',
          total_tracks: 7,
          type: 'album',
          uri: 'spotify:album:17gzvH2FPpVhpuqalLFi9j',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5Vo1hnCRmCM6M4thZCInCj',
            },
            href: 'https://api.spotify.com/v1/artists/5Vo1hnCRmCM6M4thZCInCj',
            id: '5Vo1hnCRmCM6M4thZCInCj',
            name: 'OFFICIAL HIGE DANDISM',
            type: 'artist',
            uri: 'spotify:artist:5Vo1hnCRmCM6M4thZCInCj',
          },
        ],
        disc_number: 1,
        duration_ms: 326842,
        explicit: false,
        external_ids: {
          isrc: 'JPPC01900265',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/15HNdxGKNCIO9pgaY4n7FU',
        },
        href: 'https://api.spotify.com/v1/tracks/15HNdxGKNCIO9pgaY4n7FU',
        id: '15HNdxGKNCIO9pgaY4n7FU',
        is_local: false,
        is_playable: true,
        name: 'Pretender',
        popularity: 61,
        preview_url:
          'https://p.scdn.co/mp3-preview/da47863123523107c979c50167778d55610bd613?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 7,
        type: 'track',
        uri: 'spotify:track:15HNdxGKNCIO9pgaY4n7FU',
      },
    },
    {
      added_at: '2023-08-23T06:40:51Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp',
              },
              href: 'https://api.spotify.com/v1/artists/69GGBxA162lTqCwzJG5jLp',
              id: '69GGBxA162lTqCwzJG5jLp',
              name: 'The Chainsmokers',
              type: 'artist',
              uri: 'spotify:artist:69GGBxA162lTqCwzJG5jLp',
            },
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2',
              },
              href: 'https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2',
              id: '26VFTg2z8YR0cCuwLzESi2',
              name: 'Halsey',
              type: 'artist',
              uri: 'spotify:artist:26VFTg2z8YR0cCuwLzESi2',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/0rSLgV8p5FzfnqlEk4GzxE',
          },
          href: 'https://api.spotify.com/v1/albums/0rSLgV8p5FzfnqlEk4GzxE',
          id: '0rSLgV8p5FzfnqlEk4GzxE',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02495ce6da9aeb159e94eaa453',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851495ce6da9aeb159e94eaa453',
              width: 64,
            },
          ],
          is_playable: true,
          name: 'Closer',
          release_date: '2016-07-29',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:0rSLgV8p5FzfnqlEk4GzxE',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp',
            },
            href: 'https://api.spotify.com/v1/artists/69GGBxA162lTqCwzJG5jLp',
            id: '69GGBxA162lTqCwzJG5jLp',
            name: 'The Chainsmokers',
            type: 'artist',
            uri: 'spotify:artist:69GGBxA162lTqCwzJG5jLp',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2',
            },
            href: 'https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2',
            id: '26VFTg2z8YR0cCuwLzESi2',
            name: 'Halsey',
            type: 'artist',
            uri: 'spotify:artist:26VFTg2z8YR0cCuwLzESi2',
          },
        ],
        disc_number: 1,
        duration_ms: 244960,
        explicit: false,
        external_ids: {
          isrc: 'USQX91601347',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw',
        },
        href: 'https://api.spotify.com/v1/tracks/7BKLCZ1jbUBVqRi2FVlTVw',
        id: '7BKLCZ1jbUBVqRi2FVlTVw',
        is_local: false,
        is_playable: true,
        name: 'Closer',
        popularity: 86,
        preview_url:
          'https://p.scdn.co/mp3-preview/cfd565c4d3c621771e6d25d99749b9fc200e396c?cid=174e06ca11a84265b0cc2bb26a8ce545',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:7BKLCZ1jbUBVqRi2FVlTVw',
      },
    },
  ],
  limit: 20,
  next: null,
  offset: 0,
  previous: null,
  total: 10,
}
