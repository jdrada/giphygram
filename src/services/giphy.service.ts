import axios from "axios";

const KEY = "g74xJI2ZSIfLWgBcMSa144sl2Ln3HMAH";
const URL = "https://api.giphy.com";

export const GiphyController = {
  async getTrending(limit = 10, offset = 0) {
    const results = await axios("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: "5mjiA0lqt5ZKgi270auAuqv5dvOMjrD9",
        limit,
        offset
      },
    });

    return results.data.data;
  },
};
