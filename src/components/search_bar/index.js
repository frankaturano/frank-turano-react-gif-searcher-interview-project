/**
 * Search Bar: Supports query and rating searches
 * NOTE: this could easily be modified to support additional params to search by
 */
import React from 'react'
import config from '../../config'
import cookies from '../../helpers/cookies'
import SearchHistory from '../../components/search_history'
import './styles/index.css'

// This is curently set to render a search bar and rating drop down
// A simple object loop (for (let key in obj)) could make this entirely dynamic
// We define our inputs up front for easy reference later
let queryInput, ratingInput

export default props => (
  <form className="search-bar" onSubmit={e => submit(e, props)}>
    <label className="search-query">Search
      <input value={props.params.q || ''} type="text"
        onChange={e => props.search({ q: e.target.value })}
        ref={input => { queryInput = input }} />
      <SearchHistory props={props} />
    </label>
    <input type="submit" value="submit" />
    
    <label className="search-rating">Rating
      <select value={props.params.rating || ''}
        onChange={e => props.search({ rating: e.target.value }, true)}
        ref={input => { ratingInput = input }}>
        <option value="">All Ratings</option>
        {config.ratings.map(rating => <option key={rating}>{rating}</option>)}
      </select>
    </label>
  </form>
)

// Submit helper for form submissions when the user is ready!
// NOTE: this could easily be made to search on a debounce as the user types
// We await submission to reduce the likelyhood of a poor search history
const submit = (e, props) => {
  e.preventDefault()
  props.search({ q: queryInput.value, rating: ratingInput.value }, true)
  
  let searches = cookies.get('searches') || []
  if (queryInput.value && searches.indexOf(queryInput.value) === -1) {
    searches.unshift(queryInput.value)
    cookies.set('searches', searches, config.history)
  }
}