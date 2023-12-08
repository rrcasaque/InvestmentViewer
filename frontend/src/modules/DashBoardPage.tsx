import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { COLORS } from "../themes/colors";

export const DashBoardPage = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      align="center"
      justify="center"
      bg={COLORS.PRIMARY_LIGHT}
      color="white"
    >
      <Sidebar />
    </Flex>
  );
};
