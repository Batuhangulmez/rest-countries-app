import React from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
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
  const apiSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];

    result = countries.filter((country) => {
      return String(Object.values(country)).toLowerCase().startsWith(value);
    });

    setFilteredData(result);

    if (result == "") {
      var empty = [{ name: "Arama Bulunamadı" }];
      setFilteredData(empty);
    }
  };

  const checkFunc = (data) => {
    console.log(Object.entries(data));
  };

  return (
    <section className={styles.searchBar}>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-bottom`}>
            Table da listeli verilerin
            <strong> "Capital" </strong>
            verilerinde arama yapılmıştır.
          </Tooltip>
        }
      >
        <Form.Group className="" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.label}>
            Capital Türünde Arama
          </Form.Label>
          <Form.Control
            className={styles.Control}
            type="text"
            placeholder="Capital Türünde Arama"
            onChange={capitalSearchChange}
          />
        </Form.Group>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-bottom`}>
            ülkelerin table başlıklarında listeli olan
            <strong> "Name,Capital,Region" </strong>
            verilerinde arama yapılmıştır.
          </Tooltip>
        }
      >
        <Form.Group className="" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.label}>Genel Arama</Form.Label>
          <Form.Control
            className={styles.Control}
            type="text"
            placeholder="Genel Arama"
            onChange={allSearchChange}
          />
        </Form.Group>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-bottom`}>
            json Api içeriğindeki <strong>her ülkenin bütün </strong>
            verilerinde arama yapılmıştır.
          </Tooltip>
        }
      >
        <Form.Group className="" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.label}>Json Api Araması</Form.Label>
          <Form.Control
            className={styles.Control}
            type="text"
            placeholder="Json Api Araması"
            onChange={apiSearch}
          />
        </Form.Group>
      </OverlayTrigger>
    </section>
  );
};

export default searchBar;
