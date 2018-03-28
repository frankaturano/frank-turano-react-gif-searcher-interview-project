/**
 * Search Page: Renders a GIF search page
 */
import React, { Component } from 'react'
import search from '../../helpers/search'
import SearchBar from '../../components/search_bar'
import SearchGrid from '../../components/search_grid'

export default class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = { params: {}, results: {}, searching: true }
    this.search = this.search.bind(this)
  }

  search(params, submit = false) {
    // Clone state, and update the params
    let newState = this.state
    for (let param in params) {
      newState.params[param] = params[param]
    }

    // Clear existing results if a new submission was made
    // Update the searching state to true until search completes
    if (submit) {
      newState.results = {} 
      newState.searching = true
    }

    // Set state, then potentially execute a search
    this.setState(newState, () => {
      if (!submit) return // bail if submit is not enabled

      search(this.state.params).then(res => {
        this.setState({ results: res, searching: false })
      }).catch(e => {
        this.setState({ results: {e}, searching: false })
      })
    })
  }

  componentDidMount() {
    // Initialize the search page with defaults
    search(this.state.params).then(res => {
      this.setState({ results: res, searching: false })
    }).catch(e => {
      this.setState({ results: {e}, searching: false })
    })
  }

  render() {
    // Gather some information about the state of our search
    let pagination = this.state.results.pagination || {}
    let error = this.state.results.e
    let count = pagination.total_count
    let message = error ? error : count ? count + ' GIFs found' : 'No GIFs found :('
    if (this.state.searching) message = 'Searching...'

    // Render the page based on what we've got!
    return (
      <div className="search-page">
        <SearchBar params={this.state.params} search={this.search} />
        <div className="result-total">{message}</div>
        <SearchGrid results={this.state.results.data} />
      </div>
    )
  }
}
