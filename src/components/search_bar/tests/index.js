import React from 'react'
import ReactDOM from 'react-dom'
import SearchHistory from './index.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchHistory />, div)
  ReactDOM.unmountComponentAtNode(div)
})
