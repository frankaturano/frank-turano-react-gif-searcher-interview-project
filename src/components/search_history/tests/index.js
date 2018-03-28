import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './index.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchBar />, div)
  ReactDOM.unmountComponentAtNode(div)
})
