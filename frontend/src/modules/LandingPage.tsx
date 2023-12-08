import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Flex
      w="full"
      h="100vh"
      align="center"
      justify="center"
      bg="black"
      color="white"
      direction="column"
    >
      landing page
      <Button onClick={() => navigate("/auth")}>Fazer login</Button>
    </Flex>
  );
};
