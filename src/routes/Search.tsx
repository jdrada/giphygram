import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GifCard from "../components/GifCard";
import { GiphyController } from "../services/giphy.service";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [gifs, setGifs] = useState<any>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(1);
  const [blockRequest, setBlockRequest] = useState<boolean>(false);

  const fetchMoreData = async () => {
    if (!blockRequest) {
      const gifsResponse = GiphyController.searchGifs(
        searchInput,
        10,
        counter * 10
      );
      const newGifs = await gifsResponse;
      setGifs((oldGifs: any) => [...oldGifs, ...newGifs]);
      console.log(newGifs);
      setIsFetching(false);
      setCounter((oldCounter) => oldCounter + 1);
      setBlockRequest(true);
    }
  };

  const searchHandler = (event: any) => {
    setSearchInput(event.target.value);
  };

  const searchGifs = async () => {
    setGifs([]);
    await fetchMoreData();
  };

  useEffect(() => {
    setTimeout(() => {
      setBlockRequest(false);
    }, 3000);
  }, [gifs]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
        <div>
          <input onChange={searchHandler} type="text" />
          <button onClick={searchGifs}>Buscar</button>
        </div>
        <div>
          <Container>
            <InfiniteScroll
              dataLength={gifs.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {gifs.map((gif: any) => (
                <GifCard key={gif.id} gif={gif}></GifCard>
              ))}
            </InfiniteScroll>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Search;
