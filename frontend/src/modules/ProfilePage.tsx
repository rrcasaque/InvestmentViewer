import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const ProfilePage = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      align="center"
      justify="center"
      bg="black"
      color="white"
    >
      <Sidebar />
    </Flex>
  );
};
