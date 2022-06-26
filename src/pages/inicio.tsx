import { useEffect, useState } from "react";
import GifCard from "../components/GifCard";
import { GiphyController } from "../services/giphy.service";

export default function Inicio() {
  const [gifs, setGifs] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const gifsResponse = GiphyController.getTrending();
      console.log(await gifsResponse);
      setGifs(await gifsResponse);
    };

    fetchData();
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Inicio holi</h1>
      {gifs && gifs.map((gif) => <GifCard key={gif.id} gif={gif}></GifCard>)}
    </main>
  );
}
