import axios from "axios";

const initializeApp = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // dev code
  } else {
    // Prod build code
  }
};

export default initializeApp;
