import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import styles from "../mystyle.module.css";

import * as api from "../axios";
import { Table } from "react-bootstrap";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const { data } = await api.fetchAllData();
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <SearchBar countries={countries} setFilteredData={setFilteredData} />
      <div className={styles.Homepage}>
        {countries == "" ? (
          <Loading />
        ) : (
          <div>
            <Table className={styles.Table} bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Capital</th>
                  <th>Region</th>
                  <th>Flag</th>
                </tr>
              </thead>
              <tbody>
                {filteredData == ""
                  ? countries.map((country, index) => {
                      const { id, name, capital, region, flag } = country;
                      return (
                        <tr>
                          <td>{index}</td>
                          <td>{name}</td>
                          <td>{capital}</td>
                          <td>{region}</td>
                          <td>
                            <img src={flag} />
                          </td>
                        </tr>
                      );
                    })
                  : filteredData.map((country, index) => {
                      const { id, name, capital, region, flag } = country;
                      return (
                        <tr>
                          <td>{index}</td>
                          <td>{name}</td>
                          <td>{capital}</td>
                          <td>{region}</td>
                          <td>
                            <img src={flag} />
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
