export const TOP_TRACKS_DATA = {}

export const TRACK_DATA = {
  "album": {
    "album_type": "album",
    "total_tracks": 9,
    "id": "2ANVost0y2y52ema1E9xAZ",
    "images": [
      {
        "url": "https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97",
        "height": 640,
        "width": 640
      },
      {
        "url": "https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97",
        "height": 300,
        "width": 300
      },
      {
        "url": "https://i.scdn.co/image/ab67616d00004851de437d960dda1ac0a3586d97",
        "height": 64,
        "width": 64
      }
    ],
    "name": "Thriller",
    "release_date": "1982-11-30",
    "release_date_precision": "day",
    "type": "album",
    "artists": [
      {
        "id": "3fMbdgg4jU18AjLCKBhRSm",
        "name": "Michael Jackson",
        "type": "artist",
      }
    ],
    "is_playable": true
  },
  "artists": [
    {
      "id": "3fMbdgg4jU18AjLCKBhRSm",
      "name": "Michael Jackson",
      "type": "artist",
    }
  ],
  "disc_number": 1,
  "duration_ms": 258399,
  "explicit": false,
  "id": "3BovdzfaX4jb5KFQwoPfAw",
  "is_playable": true,
  "name": "Beat It",
  "popularity": 78,
  "preview_url": "https://p.scdn.co/mp3-preview/3b0b3eb44b3149bb49ae06dd64869e20e8c13380?cid=174e06ca11a84265b0cc2bb26a8ce545",
  "track_number": 5,
  "type": "track",
  "is_local": false
}

export const RECENTLY_PLAYED_TRACK_DATA = {
  "href": "https://api.spotify.com/v1/me/player/recently-played?limit=1",
  "limit": 1,
  "next": "https://api.spotify.com/v1/me/player/recently-played?before=1694395145672&limit=1",
  "cursors": {
    "after": "1694395145672",
    "before": "1694395145672"
  },
  "items": [
    {
      "track": {
        "album": {
          "album_type": "album",
          "total_tracks": 9,
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ"
          },
          "href": "https://api.spotify.com/v1/albums/2ANVost0y2y52ema1E9xAZ",
          "id": "2ANVost0y2y52ema1E9xAZ",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851de437d960dda1ac0a3586d97",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Thriller",
          "release_date": "1982-11-30",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:2ANVost0y2y52ema1E9xAZ",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm"
              },
              "href": "https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm",
              "id": "3fMbdgg4jU18AjLCKBhRSm",
              "name": "Michael Jackson",
              "type": "artist",
              "uri": "spotify:artist:3fMbdgg4jU18AjLCKBhRSm"
            }
          ],
          "is_playable": true
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm"
            },
            "href": "https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm",
            "id": "3fMbdgg4jU18AjLCKBhRSm",
            "name": "Michael Jackson",
            "type": "artist",
            "uri": "spotify:artist:3fMbdgg4jU18AjLCKBhRSm"
          }
        ],
        "disc_number": 1,
        "duration_ms": 294226,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM19902991"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7J1uxwnxfQLu4APicE5Rnj"
        },
        "href": "https://api.spotify.com/v1/tracks/7J1uxwnxfQLu4APicE5Rnj",
        "id": "7J1uxwnxfQLu4APicE5Rnj",
        "is_playable": true,
        "name": "Billie Jean",
        "popularity": 80,
        "preview_url": "https://p.scdn.co/mp3-preview/77cd91bbc7db184389223ea31ed9cd9b21ccd8df?cid=174e06ca11a84265b0cc2bb26a8ce545",
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:7J1uxwnxfQLu4APicE5Rnj",
        "is_local": false
      },
      "played_at": "2023-09-11T01:19:05.672Z",
      "context": null
    }
  ]
}
