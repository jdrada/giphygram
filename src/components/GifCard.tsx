import { Box, Button, Center, Img } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store";
import { addFavActions } from "../store/addfav-slice";
import { addViewedActions } from "../store/addViewed-slice";

const GifCard = ({ gif }: any) => {
  const dispatch = useDispatch();

  const addFavoriteHandler = () => {
    dispatch(
      addFavActions.addFavGif({
        key: gif.key,
        id: gif.id,
        title: gif.title,
        url: gif.url,
      })
    );
  };

  const removeFavoriteHandler = () => {
    dispatch(
      addFavActions.removeFavGif({
        key: gif.key,
        id: gif.id,
        title: gif.title,
        url: gif.url,
        isFav: true,
      })
    );
  };

  const onViewedHandler = () => {
    dispatch(
      addViewedActions.addViewedGif({
        key: gif.key,
        id: gif.id,
        title: gif.title,
        url: gif.url,
      })
    );
  };

  const favGifs = useSelector((state: RootState) => state.addFav.favoriteGifs);
  const viewGifisFav = favGifs.some((gifs) => gifs.id === gif.id);

  return (
    <Box
      boxShadow="md"
      mb={6}
      pt={6}
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Center m={4} display="flex" alignItems="baseline">
        <Link to={`/gif-detail/${gif.id}`} onClick={onViewedHandler}>
          <Img src={gif.url} alt="loading..." objectFit="cover" />
        </Link>
      </Center>

      <Box p="6">
        <Center display="flex" alignItems="baseline">
          {!viewGifisFav ? (
            <Button
              onClick={addFavoriteHandler}
              colorScheme="blackAlpha"
              size="lg"
              variant="outline"
            >
              Agregar a Favoritos
            </Button>
          ) : (
            <Button
              onClick={removeFavoriteHandler}
              colorScheme="pink"
              size="lg"
              variant="solid"
            >
              ¡Favorito!
            </Button>
          )}
        </Center>
      </Box>
    </Box>
  );
};

export default GifCard;
