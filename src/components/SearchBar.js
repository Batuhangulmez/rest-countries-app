import React, { useEffect, useState } from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../mystyle.module.css";

const searchBar = ({ countries, setFilteredData }) => {
  const turkishCharactercheck = (event) => {
    var letters = { İ: "i", I: "ı", Ş: "ş", Ğ: "ğ", Ü: "ü", Ö: "ö", Ç: "ç" };

    var changeValue;
    changeValue = event.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) {
      return letters[letter];
    });
    return changeValue.toLowerCase();
  };

  const setData = (result) => {
    if (result != "") setFilteredData(result);
  };

  const capitalSearchChange = (event) => {
    let value = event.target.value;
    let changeValue = turkishCharactercheck(value);

    let result = [];

    result = countries.filter((country) => {
      console.log(String(country.capital).toLowerCase());
      return String(country.capital).toLowerCase().startsWith(changeValue);
    });

    setFilteredData(result);

    if (result == "") {
      var empty = [{ name: "Arama Bulunamadı" }];
      setFilteredData(empty);
    }
  };

  const allSearchChange = (event) => {
    let value = event.target.value;

    let changeValue = turkishCharactercheck(value);

    let result = [];

    result = countries.filter((country) => {
      return (
        String(country.capital).toLowerCase().startsWith(changeValue) ||
        String(country.region).toLowerCase().startsWith(changeValue) ||
        String(country.name).toLowerCase().startsWith(changeValue)
      );
    });

    setFilteredData(result);

    if (result == "") {
      var empty = [{ name: "Arama Bulunamadı" }];
      setFilteredData(empty);
    }
  };

  const apiSearch = (event) => {
    let value = event.target.value;

    let changeValue = turkishCharactercheck(value);

    let result = [];
    let result2 = [];

    let boolen = "";
    let control = "";

    result = countries.filter((country) => {
      boolen = Object.values(country).filter((item) => {
        if (String(item).toLowerCase().startsWith(changeValue) == true) {
          return true;
        }

        if (typeof item == "object" && item.length > 0) {
          result2 = item.filter((e) => {
            if (String(e).toLowerCase().startsWith(changeValue) == true) {
              return true;
            }
            // console.log(e);
            if (typeof e == "object") {
              control = Object.entries(e).map((key, value) => {
                if (
                  String(key[1]).toLowerCase().startsWith(changeValue) == true
                ) {
                  return key[1];
                }
              });
              return control[1] == undefined ? false : true;
            }
          });
          return result2 == "" ? false : true;
        }
      });
      return boolen == "" ? "" : boolen;
    });
    setData(result);

    if (result == "") {
      var empty = [{ name: "Arama Bulunamadı" }];
      setFilteredData(empty);
    }
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
