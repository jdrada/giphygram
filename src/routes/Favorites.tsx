import { useSelector } from "react-redux";
import GifCard from "../components/GifCard";
import { RootState } from "../store";

const Favorites = () => {
  let gifs = useSelector((state: RootState) => state.addFav.favoriteGifs);

  return (
    <div>
      {gifs.map((gif) => (
        <GifCard key={gif.key} gif={gif}></GifCard>
      ))}
    </div>
  );
};

export default Favorites;
