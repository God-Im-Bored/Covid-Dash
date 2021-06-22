import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

// import styles from "./Countries.module.css";

const Countries = ( { handleChange }) => {
  const [countries, setCountries] = useState([]);
  

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl>
      <NativeSelect defaultValue='' onChange={(e) => 
        {handleChange(e.target.value)}}>

        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
