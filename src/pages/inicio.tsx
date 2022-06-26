import { useEffect, useState } from "react";
import GifCard from "../components/GifCard";
import { GiphyController } from "../services/giphy.service";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Inicio() {
  const [gifs, setGifs] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(1);
  const [blockRequest, setBlockRequest] = useState<boolean>(false);

  const fetchMoreData = async () => {
    if (!blockRequest) {
      const gifsResponse = GiphyController.getTrending(10, counter * 10);
      const newGifs = await gifsResponse;
      setGifs((oldGifs) => [...oldGifs, ...newGifs]);
      setIsFetching(false);
      setCounter((oldCounter) => oldCounter + 1);
      setBlockRequest(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const gifsResponse = GiphyController.getTrending();
      console.log(await gifsResponse);
      setGifs(await gifsResponse);
    };
    if (isFetching) fetchData();
    setTimeout(() => {
      setBlockRequest(false);
    }, 3000);
  }, [isFetching]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Inicio holi</h1>
      <InfiniteScroll
        dataLength={gifs.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        height={400}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif}></GifCard>
        ))}
      </InfiniteScroll>
    </main>
  );
}
