import { Button, Box, Center, Img } from "@chakra-ui/react";
import { favActions } from "../store/fav-slice";
import { useDispatch } from "react-redux";

const GifCard = ({ gif }: any) => {
  const dispatch = useDispatch();
  const onFavoriteHandler = () => {
    dispatch(
      favActions.addFavGif({
        id: 1,
        title: gif.title,
        url: gif.images.original.url,
      })
    );
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
          src={gif.images.original.url}
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
