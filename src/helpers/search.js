import config from '../config'

/**
 * Search: Find GIFS either by search term, or trending
 * NOTE: This helper could easily be modified to serve as a middleware for most any endpoint
 * @return {Promise}: resolves with parsed data, rejects with the error status
 */
export default params => new Promise((resolve, reject) => {
  // Determine which endpoint to hi
  let path = params.q && params.q.length ? 'search' : 'trending'
  let endpoint = `${config.api}/${path}?api_key=${config.key}`

  // Set the number of gifs to be returned
  params.limit = params.limit || config.limit

  // This will allow for any params to be passed in and formatted
  for (let param in params) {
    if (params[param]) endpoint += `&${param}=${params[param]}`
  }
  
  // Open a connection to the endpoint
  let xhr = new XMLHttpRequest()
  xhr.open('GET', endpoint)
  xhr.send() // TODO: Closed network connections can error out here

  // Either resolve with the parsed response data, or reject on error
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 && xhr.responseText) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject('Something went wrong :(') // TODO: make this message more helpful?
      }
    }
  }
})
