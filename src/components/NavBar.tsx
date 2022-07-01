import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import {
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
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container>
          <Flex
            pos="relative"
            as="header"
            align="center"
            position="fixed"
            backgroundColor="rgba(255, 255, 255, 0.9)"
            backdropFilter="saturate(180%) blur(5px)"
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
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
