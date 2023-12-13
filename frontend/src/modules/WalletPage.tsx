import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { showModal } from "../contexts/ModalStore";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../consts/endpoints";
import { WalletHeader } from "../components/Wallet/WalletHeader";
import { WalletTable } from "../components/Wallet/WalletTable";
import { WalletActions } from "../components/Wallet/WalletActions";
import { useAuthStore } from "../contexts/AuthStore";

export const WalletPage = () => {
  const [categories, setCategories] = useState();
  const [investmentType, setInvestmentType] = useState("fixedAndVariable");

  const getCategories = async () => {
    if (!localStorage.getItem("token")) {
      useAuthStore.setState({ isAuthenticated: false });
    } else {
      const categories = await (
        await axios.get(API.STOCK.GET_CATEGORIES, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
      ).data.stockCategories;
      setCategories(categories);
    }
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
        bg={"rgba(0, 0, 0, 0.5)"}
        backdropFilter="blur(5px)"
        w="calc(100vw - 360px)"
        h="calc(100vh - 60px)"
        position="relative"
        ml="300px"
        borderRadius="15px"
        direction="column"
      >
        <Flex w="full" direction="column" maxW="100%">
          <WalletActions />
          <Flex w="full" px="18px" direction="column">
            <WalletHeader
              amount={1234.56}
              setInvestmentType={setInvestmentType}
            />
            <WalletTable />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
