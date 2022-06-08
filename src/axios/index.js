import axios from "axios";

const API = axios.create({
  baseURL: "https://restcountries.com/v2",
});

export const fetchAllData = async () => await API.get("/all");
