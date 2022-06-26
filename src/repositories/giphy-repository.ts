import axios from "axios";

const KEY = "g74xJI2ZSIfLWgBcMSa144sl2Ln3HMAH";
const URL = "https://api.giphy.com";

export default axios.create({
  baseURL: URL,
  params: {
    api_key: KEY,
  },
});
