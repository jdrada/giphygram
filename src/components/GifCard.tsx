import axios from "axios";
import React, { useEffect, useState } from "react";

const GifCard = () => {
  useEffect(() => {
    const fetchData = async () => {
      const results = axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "5mjiA0lqt5ZKgi270auAuqv5dvOMjrD9",
        },
      });

      console.log(results);
    };

    fetchData();
  });

  return <div>GifCard</div>;
};

export default GifCard;
