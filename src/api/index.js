import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const url2 = "https://data.cityofchicago.org/resource/yhhz-zm2v.json";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.error(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modified = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modified;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    

    const modified = countries.map((country) => ({
      name: country.name
    }))

    return modified
  } catch (error) {
    console.error(error);
  }
};

export const fetchCovidData = async () => {
  try {
    const { data } = await axios.get(url2);

    // refined payload with zip code's total cases, deaths and tests, as well as most recent update
    const refined = data.map((location) => {
      return {
        zip_code: location.zip_code,
        cases_total: location.cases_cumulative,
        deaths_total: location.deaths_cumulative,
        tests_total: location.tests_cumulative,
        last_update: new Date(location.week_end).toDateString(),
      };
    });

    // filtered payload with only most recently update zip code's instance
    const filtered = Object.values(
      refined.reduce((acc, obj) => {
        const curr = acc[obj.zip_code];

        acc[obj.zip_code] = curr
          ? curr.last_update > obj.last_update
            ? obj
            : curr
          : obj;

        return acc;
      }, [])
    );

    return filtered;
  } catch (error) {
    console.error(error);
  }
};
