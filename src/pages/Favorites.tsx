import { Center, Container, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import GifCard from "../components/GifCard";
import { RootState } from "../store";

const Favorites = () => {
  const gifs = useSelector((state: RootState) => state.addFav.favoriteGifs);

  return (
    <Container paddingTop={6}>
      {gifs.length > 0 ? (
        <div>
          {gifs.map((gif) => (
            <GifCard key={gif.key} gif={gif}></GifCard>
          ))}
        </div>
      ) : (
        <Center
          boxShadow="sm"
          mb={6}
          p={6}
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Text align="center" fontSize="2xl" as="b">
            Aún no tienes ningún GIF favorito.
          </Text>
        </Center>
      )}
    </Container>
  );
};

export default Favorites;
