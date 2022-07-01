import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import GifCard from "../components/GifCard";
import { RootState } from "../store";

const Viewed = () => {
  const gifs = useSelector((state: RootState) => state.addViewed.viewedGifs);

  return (
    <Container>
      {gifs.map((gif) => (
        <GifCard key={gif.key} gif={gif}></GifCard>
      ))}
    </Container>
  );
};

export default Viewed;
