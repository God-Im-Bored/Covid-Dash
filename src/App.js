import React from 'react'
import styles from './App.module.css';
import { fetchData, fetchCovidData } from './api'

import { Cards, Chart, Countries, Zips } from './components'

class App extends React.Component {
  state = {
    data: {},
    covidData: []
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    const data2 = await fetchCovidData()

    this.setState({ data: fetchedData, covidData: data2 })
  }
  
  render() {
    // console.log(this.state)
    const { data } = this.state
    return (
      <div className={styles.container}>
        
        <Cards data={data} />
        <Countries />
        <Chart />
        {/* <Zips /> */}
      </div>
    )
  }
}

export default App;
