import { Button, Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { showModal } from "../contexts/ModalStore";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../consts/endpoints";

export const WalletPage = () => {
  const [categories, setCategories] = useState();

  const getCategories = async () => {
    const categories = await (
      await axios.get(API.STOCK.GET_CATEGORIES, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
    ).data.stockCategories;
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Flex
      w="full"
      h="100vh"
      align="center"
      justify="center"
      bgImage="./wallpaper.jpg"
      bgPos="center"
      bgSize="cover"
    >
      <Sidebar />
      <Flex
        bg={"rgba(0, 0, 0, 0.8)"}
        backdropFilter="blur(5px)"
        w="calc(100vw - 360px)"
        minH="calc(100vh - 60px)"
        ml="300px"
        borderRadius="15px"
      >
        <Button
          onClick={() => {
            showModal("CreateStockModal", { categories: categories });
          }}
        >
          Adicionar Investimento
        </Button>
      </Flex>
    </Flex>
  );
};
