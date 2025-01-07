import axios from "axios";

const jsonApiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default jsonApiInstance;
