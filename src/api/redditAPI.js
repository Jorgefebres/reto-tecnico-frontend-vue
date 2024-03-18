import axios from "axios";

const redditAPI = axios.create({
  baseURL: "https://www.reddit.com",
});

export default redditAPI;
