import React from "react";
import { Form } from "react-bootstrap";
import styles from "../mystyle.module.css";

const searchBar = ({ countries, setFilteredData }) => {
  const capitalSearchChange = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];

    result = countries.filter((country) => {
      return String(country.capital).toLowerCase().startsWith(value);
    });

    setFilteredData(result);

    if (result == "") {
      var empty = [{ name: "Arama Bulunamadı" }];
      setFilteredData(empty);
    }
  };

  const allSearchChange = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];

    result = countries.filter((country) => {
      return (
        String(country.capital).toLowerCase().startsWith(value) ||
        String(country.region).toLowerCase().startsWith(value) ||
        String(country.name).toLowerCase().startsWith(value)
      );
    });

    setFilteredData(result);

    if (result == "") {
      var empty = [{ name: "Arama Bulunamadı" }];
      setFilteredData(empty);
    }
  };

  return (
    <section className={styles.searchBar}>
      <Form.Group className="" controlId="exampleForm.ControlInput1">
        <Form.Label className={styles.label}>Capital Türünde Arama</Form.Label>
        <Form.Control
          className={styles.Control}
          type="text"
          placeholder="Capital Türünde Arama"
          onChange={capitalSearchChange}
        />
      </Form.Group>
      <Form.Group className="" controlId="exampleForm.ControlInput1">
        <Form.Label className={styles.label}>Genel Arama</Form.Label>
        <Form.Control
          className={styles.Control}
          type="text"
          placeholder="Genel Arama"
          onChange={allSearchChange}
        />
      </Form.Group>
    </section>
  );
};

export default searchBar;
