import { Button, Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { showModal } from "../contexts/ModalStore";

export const WalletPage = () => {
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
            showModal("CreateStockModal");
          }}
        >
          Adicionar Investimento
        </Button>
      </Flex>
    </Flex>
  );
};
