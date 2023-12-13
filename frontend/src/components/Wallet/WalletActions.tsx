import { Flex, Text } from "@chakra-ui/react";
import { COLORS } from "../../themes/colors";

export const WalletActions = () => {
  return (
    <Flex
      w="full"
      h="44px"
      borderTopRadius="15px"
      bg={COLORS.PRIMARY}
      align="center"
      justify="space-around"
      color={COLORS.WHITE}
    >
      <Text _hover={{ cursor: "pointer" }}>Adicionar investimento</Text>
      <Text _hover={{ cursor: "pointer" }}>Rebalancear carteira</Text>
    </Flex>
  );
};
