/**
 * Search Grid: renders the results of a GIF search
 */
import React from 'react'
import './styles/index.css'

// This expects results to include a title and an image object (ex: fixed_width)
// This could easily be modified to render the results of most any api
// NOTE: an inline style is applie to pre-allocate space to the image (avoids janky rendering)
export default ({ results }) => (
  <div className="search-grid">
    {results && results.length ? results.map((result, i) => (
      <div className="search-result" key={i}>
        <div className="result-img" title={result.title}
          style={{ backgroundImage: `url(${result.images.fixed_width.url})`,
          paddingBottom: result.images.fixed_width.height / result.images.fixed_width.width * 100 + '%' }}
        />
      </div>
    )) : ''}
  </div>
)
