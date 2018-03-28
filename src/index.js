/**
 * Index: The entry point into the application
 */
import React from 'react'
import ReactDOM from 'react-dom'
import SearchPage from './components/search_page'
import './index.css'

// This application currenly renders the search page in SPA format
// Simply adding a `<Router>` or `<Switch>` with `<Routes>` would enable multiple pages
ReactDOM.render(<SearchPage />, document.getElementById('root'))
