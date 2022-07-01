import {
  Center,
  CircularProgress,
  Container,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import GifCard from "../components/GifCard";
import { IGif } from "../interfaces/IGif";
import { GiphyController } from "../services/giphy.service";

const Home = () => {
  const [gifs, setGifs] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(1);

  const fetchMoreData = async () => {
    setTimeout(async () => {
      const gifsResponse = GiphyController.getTrending(10, counter * 10);
      let newGifs: IGif[] = await gifsResponse;
      newGifs = newGifs.map((gif) => {
        gif.url = gif.images.original.url;
        return gif;
      });
      setGifs((oldGifs: IGif[]) => [...oldGifs, ...newGifs]);
      setIsFetching(false);
      setCounter((oldCounter) => oldCounter + 1);
    }, 3000);
  };

  useEffect(() => {
    const fetchData = async () => {
      const gifsResponse = GiphyController.getTrending();
      let newGifs: IGif[] = await gifsResponse;
      newGifs = newGifs.map((gif) => {
        gif.url = gif.images.original.url;
        return gif;
      });
      setGifs(newGifs);
    };
    if (gifs) fetchData();
  }, [isFetching]);

  return (
    <main>
      <Container>
        <InfiniteScroll
          dataLength={gifs.length}
          next={fetchMoreData}
          hasMore={true}
          loader={
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Los Haz visto todos!</b>
            </p>
          }
        >
          {gifs &&
            gifs.map((gif, index) => <GifCard key={index} gif={gif}></GifCard>)}
        </InfiniteScroll>
      </Container>
    </main>
  );
};

export default Home;
