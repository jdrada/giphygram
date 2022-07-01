import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" bg="white" boxShadow={useColorModeValue("sm", "sm-dark")}>
        <Container>
          <Flex
            pos="absolute"
            position="fixed"
            justify="space-between"
            backgroundColor="white"
            w="100%"
          >
            <HStack>
              <NavLink to={"/"}>
                <Center>
                  <Text fontSize="4xl" as="b">
                    Giphy
                  </Text>
                  <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="4xl"
                    as="b"
                  >
                    gram
                  </Text>
                  <StarIcon boxSize={5} />
                </Center>
              </NavLink>

              {!isDesktop && (
                <Menu>
                  <MenuButton
                    align="center"
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    fontSize="4xl"
                  />
                  <MenuList>
                    <NavLink to={"/"}>
                      <MenuItem>Inicio</MenuItem>
                    </NavLink>
                    <NavLink to={"search"}>
                      <MenuItem>Buscar</MenuItem>
                    </NavLink>
                    <NavLink to={"favorites"}>
                      <MenuItem>Favoritos</MenuItem>
                    </NavLink>
                    <NavLink to={"viewed"}>
                      <MenuItem>Visitados</MenuItem>
                    </NavLink>
                  </MenuList>
                </Menu>
              )}
              {isDesktop && (
                <ButtonGroup variant="ghost">
                  <NavLink to={"/"}>
                    <Button>Inicio</Button>
                  </NavLink>
                  <NavLink to={"search"}>
                    <Button>Buscar</Button>
                  </NavLink>
                  <NavLink to={"favorites"}>
                    <Button>Favoritos</Button>
                  </NavLink>
                  <NavLink to={"viewed"}>
                    <Button>Visitados</Button>
                  </NavLink>
                </ButtonGroup>
              )}
              <a href="https://github.com/jdrada/giphygram.git">
                <Avatar
                  boxSize="10"
                  name="Christoph Winston"
                  src="https://avatars.githubusercontent.com/u/98852378?v=4"
                />
              </a>
              <Text as="sub"> by: JDrada</Text>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
