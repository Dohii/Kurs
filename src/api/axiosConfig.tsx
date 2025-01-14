import axios from "axios";

const supabaseClient = axios.create({
  baseURL: process.env.REACT_APP_SUPABASE_URL + "/rest/v1",
  headers: {
    apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
    Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_API_KEY}`,
  },
});

export default supabaseClient;
