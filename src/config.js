/**
 * Config: Control core application variables here
 * NOTE: In production, api keys etc. would be referenced as env variables for security
 */
export default {
  api: 'http://api.giphy.com/v1/gifs', // changing this to .../v1/stickers works!
  key: 'MTsHCjRQNHUy186RAQ80kOPScRrlQIds', // should be an enviroment variable!
  limit: 18, // controls how many results are returned per search
  ratings: ['Y', 'G', 'PG', 'PG-13','R'], // could be used to support a different rating schema
  history: 90 // days to store user searches
}
