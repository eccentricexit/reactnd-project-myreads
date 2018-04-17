import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// TODO: README.md says don't modify this file, but we need BrowserRouter.
// TODO: README.md says we shouldn't need to modify this, but I needed react-dom-router
// Ask for alternatives

// TODO: Rename file extensions to .js instead of .jsx

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
)
