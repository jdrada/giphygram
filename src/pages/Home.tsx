import { Center, CircularProgress, Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import GifCard from "../components/GifCard";
import { GiphyController } from "../services/giphy.service";
import { RootState } from "../store";

const Home = () => {
  const [gifs, setGifs] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(1);
  const [blockRequest, setBlockRequest] = useState<boolean>(false);

  const fetchMoreData = async () => {
    if (!blockRequest) {
      const gifsResponse = GiphyController.getTrending(10, counter * 10);
      let newGifs = await gifsResponse;
      newGifs = newGifs.map((gif: any) => {
        gif.url = gif.images.original.url;
        console.log(gif);
        return gif;
      });
      setGifs((oldGifs) => [...oldGifs, ...newGifs]);
      setIsFetching(false);
      setCounter((oldCounter) => oldCounter + 1);
      setBlockRequest(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const gifsResponse = GiphyController.getTrending();
      let newGifs = await gifsResponse;
      newGifs = newGifs.map((gif: any) => {
        gif.url = gif.images.original.url;
        return gif;
      });
      setGifs(await newGifs);
    };
    if (isFetching) fetchData();
    setTimeout(() => {
      setBlockRequest(false);
    }, 3000);
  }, [isFetching]);

  const favGifState = useSelector(
    (state: RootState) => state.addFav.favoriteGifs
  );

  return (
    <main>
      <Container>
        <InfiniteScroll
          dataLength={gifs.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<CircularProgress isIndeterminate color="teal" />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Los Haz visto todos!</b>
            </p>
          }
        >
          {gifs &&
              gifs.map((gif, index) => (
                <GifCard key={index} gif={gif}></GifCard>
              ))
          }
        </InfiniteScroll>
      </Container>
    </main>
  );
};

export default Home;
