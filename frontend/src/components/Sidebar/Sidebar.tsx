import {
  Avatar,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { COLORS } from "../../themes/colors";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../contexts/AuthStore";

export const Sidebar = () => {
  const navigate = useNavigate();

  const URL = window.location.pathname;

  const logout = () => {
    localStorage.removeItem("token");
    useAuthStore.setState({ isAuthenticated: false });
    navigate("/");
  };

  return (
    <Flex
      position="fixed"
      bg={COLORS.COMPLEMENTARY}
      w="300px"
      h="100vh"
      left="0"
      direction="column"
      align="center"
      justify="space-evenly"
    >
      <Image src="./darkLogo.png" w="280px" />
      <Flex
        direction="column"
        w="full"
        align="center"
        justify="space-evenly"
        h="200px"
      >
        <Flex
          _hover={{
            bg: COLORS.PRIMARY_LIGHT,
            color: COLORS.WHITE,
            cursor: "pointer",
          }}
          align="center"
          h="48px"
          justify="center"
          borderRadius="10px"
          bg={URL === `/dashboard` ? COLORS.PRIMARY_LIGHT : "none"}
          color={URL === `/dashboard` ? COLORS.WHITE : COLORS.BLACK}
          w="90%"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </Flex>
        <Flex
          _hover={{
            bg: COLORS.PRIMARY_LIGHT,
            color: COLORS.WHITE,
            cursor: "pointer",
          }}
          align="center"
          h="48px"
          justify="center"
          borderRadius="10px"
          bg={URL === `/profile` ? COLORS.PRIMARY_LIGHT : "none"}
          color={URL === `/profile` ? COLORS.WHITE : COLORS.BLACK}
          w="90%"
          onClick={() => navigate("/profile")}
        >
          Perfil
        </Flex>
        <Flex
          _hover={{
            bg: COLORS.PRIMARY_LIGHT,
            color: COLORS.WHITE,
            cursor: "pointer",
          }}
          align="center"
          h="48px"
          borderRadius="10px"
          bg={URL === `/wallet` ? COLORS.PRIMARY_LIGHT : "none"}
          justify="center"
          color={URL === `/wallet` ? COLORS.WHITE : COLORS.BLACK}
          w="90%"
          onClick={() => navigate("/wallet")}
        >
          Carteira
        </Flex>
      </Flex>
      <Flex bg={COLORS.PRIMARY_DARK} borderRadius="30px" w="90%">
        <Menu>
          <MenuButton
            as={Button}
            bg="transparent"
            h="60px"
            w="100%"
            _active={{ bg: "#ffffff25" }}
            _hover={{ bg: "#ffffff25" }}
            borderRadius="30px"
          >
            <Flex
              color="white"
              w="100%"
              h="60px"
              align="center"
              justify="flex-start"
              borderRadius="30px"
            >
              <Avatar
                name="Nome"
                bg="teal.400"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhp_EwXkOqmFvGjiU083RaSXuXrTTZSjEqVyslwMr6dXP70AGesL6NjLGEfbLisXnjHRY&usqp=CAU"
              />
              <Flex
                display={{ base: "none", md: "none", lg: "block" }}
                ml="5px"
                direction="column"
                w="70%"
              >
                <Text
                  fontWeight="bold"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  w="100%"
                >
                  Rafael Rocha Casaque
                </Text>
                <Text
                  fontWeight="light"
                  color="gray"
                  align="left"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  w="100%"
                >
                  rrcasaque@hotmail.com
                </Text>
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList bg={COLORS.BLACK} borderColor="transparent">
            <MenuItem
              alignSelf="center"
              bg={COLORS.BLACK}
              color={COLORS.WHITE}
              borderRadius="5px"
              onClick={logout}
            >
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
