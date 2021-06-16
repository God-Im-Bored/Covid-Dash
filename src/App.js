import React from 'react'
import styles from './App.module.css';
import { fetchData } from './api'

import { Cards, Chart, Countries } from './components'

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData()

    console.log(data)
  }
  render() {
    return (
      <div className={styles.container}>
        
        <Cards />
        <Countries />
        <Chart />
      </div>
    )
  }
}

export default App;
