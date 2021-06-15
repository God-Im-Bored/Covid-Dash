import React from 'react'
import './styles/App.css';

import { Cards, Chart, Countries } from './components'

class App extends React.Component {
  render() {
    return (
      <div>
        <pre>Hello from App.js</pre>
        <Cards />
        <Countries />
        <Chart />
      </div>
    )
  }
}

export default App;
