import axios from "axios";

export const GiphyController = {
  async getTrending(limit = 10, offset = 0) {
    const results = await axios("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: "5mjiA0lqt5ZKgi270auAuqv5dvOMjrD9",
        limit,
        offset,
      },
    });

    return results.data.data;
  },
};
