import axios from "axios";

const UnsplashApi = axios.create({
  baseURL: process.env.REACT_APP_UNSPLASH_URL + "?client_id=",
  headers: {
    apiKey: process.env.REACT_APP_UNSPLASH_API_KEY,
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
  },
});

export default UnsplashApi;