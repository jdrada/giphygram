import { position } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const GifCard = ({ gif }: any) => {
  return (
    <div>
      <img src={gif.images.original.url} alt="loading..." />
      <div>
        <button onClick={() => console.log(gif.title)}>favorito</button>
      </div>
    </div>
  );
};

export default GifCard;
