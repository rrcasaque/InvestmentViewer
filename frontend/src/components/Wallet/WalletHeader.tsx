import { Flex, Select, Text } from "@chakra-ui/react";
import { COLORS } from "../../themes/colors";

interface WalletHeaderProps {
  amount: number;
  setInvestmentType: React.Dispatch<React.SetStateAction<string>>;
}

export const WalletHeader = ({
  amount,
  setInvestmentType,
}: WalletHeaderProps) => {
  return (
    <Flex w="full" h="80px" align="center" justify="space-between">
      <Text fontSize="48px" fontWeight="bold" color={COLORS.PRIMARY_LIGHT}>
        R${amount.toLocaleString()}
      </Text>
      <Flex color={COLORS.SECONDARY} align="center" justify="space-between">
        <Select
          w="240px"
          textAlign="center"
          fontWeight="600"
          color={COLORS.WHITE}
          bg={COLORS.PRIMARY_DARK}
          background={COLORS.PRIMARY_DARK}
          onChange={(e) => setInvestmentType(e.currentTarget.value)}
        >
          <Text as="option" value="fixedAndVariable" color={COLORS.BLACK}>
            Renda fixa + variável
          </Text>
          <Text as="option" value="onlyFixed" color={COLORS.BLACK}>
            Apenas renda fixa
          </Text>
          <Text as="option" value="onlyVariable" color={COLORS.BLACK}>
            Apenas renda variável
          </Text>
        </Select>
      </Flex>
    </Flex>
  );
};
