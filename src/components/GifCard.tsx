import { Box, Button, Center, Img } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addFavActions } from "../store/addfav-slice";

const GifCard = ({ gif }: any) => {
  const dispatch = useDispatch();
  const onFavoriteHandler = () => {
    dispatch(
      addFavActions.addFavGif({
        key: gif.key,
        id: gif.id,
        title: gif.title,
        url: gif.url,
      })
    );
    dispatch(addFavActions.isFavorite());
  };

  return (
    <Box
      boxShadow="base"
      mb={6}
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Center m={4} display="flex" alignItems="baseline">
        <Img
          src={gif.url}
          alt="loading..."
          objectFit="cover"
          onClick={() => console.log(gif.title)}
        />
      </Center>

      <Box p="6">
        <Center display="flex" alignItems="baseline">
          <Button
            onClick={onFavoriteHandler}
            colorScheme="teal"
            size="lg"
            variant="outline"
          >
            Button
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default GifCard;
