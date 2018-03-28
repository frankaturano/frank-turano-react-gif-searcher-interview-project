/**
 * Search History: A dropdown that reveals past searches
 * These pase searches are selectable and leverage the cookies helper!
 */
import React from 'react'
import cookies from '../../helpers/cookies'
import './styles/index.css'
import events from './events'

export default ({ props }) => (
  <div className="search-history">
    {cookies.get('searches') ? cookies.get('searches').map(search => {
      let query = props.params.q && props.params.q.length
      let match = search.indexOf(props.params.q) >= 0
      let exactMatch = search === props.params.q
      
      if (query && match && !exactMatch) {
        return (<span className="history-item" key={search}
            onClick={() => props.search({ q: search }, true)}>{search}</span>)
      } else {
        return ''
      }
    }) : ''}
  </div>
)
