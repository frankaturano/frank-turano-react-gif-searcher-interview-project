import React from 'react'
import ReactDOM from 'react-dom'
import SearchGrid from './index.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchGrid />, div)
  ReactDOM.unmountComponentAtNode(div)
})
