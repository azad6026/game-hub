import axios from "axios";  

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ed8dfcff9fea48fd9c9446c1a5be8932",
  },
});
