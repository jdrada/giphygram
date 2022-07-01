import { Box, Button, Center, Container, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GifCard from "../components/GifCard";
import { GiphyController } from "../services/giphy.service";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [gifs, setGifs] = useState<any>([]);
  const [counter, setCounter] = useState<number>(1);
  const [uiFeedback, setUiFeedback] = useState(false);

  const fetchMoreData = async () => {
    setUiFeedback(!uiFeedback);
    setTimeout(async () => {
      const gifsResponse = GiphyController.searchGifs(
        searchInput,
        10,
        counter * 10
      );
      let newGifs = await gifsResponse;
      newGifs = newGifs.map((gif: any) => {
        gif.url = gif.images.original.url;
        return gif;
      });
      setGifs((oldGifs: any) => [...oldGifs, ...newGifs]);
      setCounter((oldCounter) => oldCounter + 1);
    }, 3000);
  };

  const searchHandler = (event: any) => {
    setSearchInput(event.target.value);
  };

  const searchGifs = async () => {
    setGifs([]);
    await fetchMoreData();
  };

  useEffect(() => {}, [gifs]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <Container>
        <Center>
          <Input
            type="text"
            marginEnd={6}
            size="lg"
            placeholder="Busca Gifs"
            onChange={searchHandler}
          />

          <Button
            onClick={searchGifs}
            colorScheme="blackAlpha"
            size="lg"
            variant="outline"
          >
            Buscar
          </Button>
        </Center>

        <Box paddingTop={6}>
          <InfiniteScroll
            dataLength={gifs.length}
            next={fetchMoreData}
            hasMore={true}
            loader={""}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>¡Los has visto todos!</b>
              </p>
            }
          >
            {gifs.map((gif: any) => (
              <GifCard key={gif.id} gif={gif}></GifCard>
            ))}
          </InfiniteScroll>
        </Box>
      </Container>
    </main>
  );
};

export default Search;
