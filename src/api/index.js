import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const url2 = "https://data.cityofchicago.org/resource/yhhz-zm2v.json";

export const fetchData = async (country) => {
  let customUrl = url;

  if (country) {
    customUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(customUrl);

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
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.error(error);
  }
};


