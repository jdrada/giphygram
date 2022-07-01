import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import GifCard from "../components/GifCard";
import { Box, Center, Container, Text } from "@chakra-ui/react";

const GifDetail = () => {
  const gifs = useSelector((state: RootState) => state.addViewed.viewedGifs);

  const params = useParams();
  const viewGif = gifs.find((gifs) => gifs.id === params.gifId);

  return (
    <Container>
      <Center
        boxShadow="sm"
        mb={6}
        p={6}
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Text align="center" fontSize="4xl" as="b">
          {viewGif!.title}
        </Text>
      </Center>
      <GifCard gif={viewGif}></GifCard>
    </Container>
  );
};

export default GifDetail;
