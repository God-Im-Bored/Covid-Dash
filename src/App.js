import React from "react";
import styles from "./App.module.css";
import { fetchData, fetchCovidData } from "./api";

import { Cards, Chart, Countries } from "./components";

class App extends React.Component {
  state = {
    data: {},
    covidData: [],
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    const data2 = await fetchCovidData();

    this.setState({
      data: fetchedData,
      covidData: data2,
    });
  }

  handleChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    console.log(this.state)
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <pre>Global Covid Dashboard</pre>
        <Cards data={data} />
        <Countries handleChange={this.handleChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
