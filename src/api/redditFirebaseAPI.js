import axios from "axios";

const redditFirebaseAPI = axios.create({
  baseURL: "https://reto-tecnico-vue-default-rtdb.firebaseio.com",
});

export default redditFirebaseAPI;
