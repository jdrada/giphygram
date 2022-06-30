import { Button, Box, Center, Img } from "@chakra-ui/react";
import { addFavActions } from "../store/addfav-slice";
import { useDispatch } from "react-redux";

const GifCard = ({ gif }: any) => {
  const gifData = {
    key: gif.id,
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
  };

  const dispatch = useDispatch();
  const onFavoriteHandler = () => {
    dispatch(
      addFavActions.addFavGif({
        key: gifData.key,
        id: gifData.id,
        title: gifData.title,
        url: gifData.url,
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
          src={gifData.url}
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
