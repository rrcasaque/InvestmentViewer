import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { API } from "../../consts/endpoints";
import { useAuthStore } from "../../contexts/AuthStore";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../themes/colors";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface RegisterProps {
  rotate: string;
  index: string;
  children: React.ReactNode;
}

export const Register = (props: RegisterProps) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const registerUser = async (
    email: string,
    password: string,
    name: string
  ) => {
    const payload = {
      email: email,
      name: name,
      password: password,
    };

    try {
      setLoading(true);
      const res = await axios.post(API.AUTH.REGISTER, payload);
      useAuthStore.setState({ isAuthenticated: true });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      return toast({
        title: "Erro",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      h="50vh"
      w="50vw"
      align="center"
      justify="space-around"
      position="absolute"
      width="450px"
      height="536px"
      maxW="95%"
      p="0"
      border-radius="10px"
      transition="700ms"
      borderRadius="15px"
      bg={COLORS.COMPLEMENTARY}
      direction="column"
      style={{ backfaceVisibility: "hidden" }}
      transform={props.rotate}
      zIndex={props.index}
    >
      <Flex bg={COLORS.PRIMARY} w="full" align="center" justify="center">
        <Image src="./lightLogo.png" w="200px" />
      </Flex>
      <Flex as="form" h="64%" w="75%" direction="column" justify="center">
        <FormControl mb="8px">
          <FormLabel>Nome:</FormLabel>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            bg="#ccc"
            type="text"
            placeholder="Digite seu nome completo"
          />
        </FormControl>
        <FormControl mb="8px">
          <FormLabel>Email:</FormLabel>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            bg="#ccc"
            type="email"
            placeholder="Digite seu endereço de email"
          />
        </FormControl>
        <FormControl mb="8px">
          <FormLabel>Senha:</FormLabel>
          <InputGroup>
            <Input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              bg="#ccc"
              type={show ? "text" : "password"}
              placeholder="Digite sua senha de acesso"
            />
            <InputRightElement
              width="50px"
              onClick={() => {
                setShow(!show);
              }}
            >
              <Button h="1.75rem" size="sm" bg="transparent">
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            registerUser(email, password, name);
          }}
          bg={COLORS.PRIMARY}
          color={COLORS.LIGHT}
          _hover={{
            filter: "brightness(0.85)",
          }}
          w="50%"
          alignSelf="center"
          mt="8px"
        >
          {loading ? <Spinner color={COLORS.COMPLEMENTARY} /> : "Cadastrar"}
        </Button>
      </Flex>
      {props.children}
    </Flex>
  );
};
