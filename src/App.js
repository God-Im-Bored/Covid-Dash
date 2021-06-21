import React from 'react'
import styles from './App.module.css';
import { fetchData, fetchCovidData, fetchCountries } from './api'

import { Cards, Chart, Countries } from './components'

class App extends React.Component {
  state = {
    data: {},
    covidData: [],
    countries: []
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    const data2 = await fetchCovidData()
    const countriesList = await fetchCountries()

    

    this.setState({ data: fetchedData, covidData: data2, countries: countriesList })
  }
  
  render() {
    console.log(this.state)
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
