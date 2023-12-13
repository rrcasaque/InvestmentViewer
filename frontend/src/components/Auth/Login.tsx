import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../consts/endpoints";
import { useAuthStore } from "../../contexts/AuthStore";
import { COLORS } from "../../themes/colors";

interface LoginProps {
  rotate: string;
  index: string;
  children: React.ReactNode;
}

export const Login = (props: LoginProps) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [keepConnected, setKeepConnected] = useState(false);

  const loginUser = async (email: string, password: string) => {
    const payload = {
      email: email,
      password: password,
      keepConnected: keepConnected,
    };

    try {
      setLoading(true);
      const res = await axios.post(API.AUTH.LOGIN, payload);
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
      height="525px"
      maxW="95%"
      p="0"
      border-radius="10px"
      transition="700ms"
      borderRadius="15px"
      bg={COLORS.PRIMARY}
      direction="column"
      transform={props.rotate}
      zIndex={props.index}
    >
      <Flex bg={COLORS.COMPLEMENTARY} w="full" align="center" justify="center">
        <Image src="./darkLogo.png" w="200px" />
      </Flex>
      <Flex h="64%" w="75%" as="form" direction="column" justify="center">
        <FormControl mb="8px">
          <FormLabel color={COLORS.LIGHT}>Email:</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            bg="#ccc"
            placeholder="Digite seu endereço de email"
          />
        </FormControl>
        <FormControl mb="8px">
          <FormLabel color={COLORS.LIGHT}>Senha:</FormLabel>
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
        <Flex align="center" justify="center">
          <Checkbox
            onChange={(e) => {
              setKeepConnected(e.currentTarget.checked);
            }}
            color={COLORS.WHITE}
          >
            Manter-me conectado
          </Checkbox>
        </Flex>
        <Button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            loginUser(email, password);
          }}
          bg={COLORS.COMPLEMENTARY}
          color={COLORS.BLACK}
          _hover={{
            filter: "brightness(0.85)",
          }}
          w="50%"
          alignSelf="center"
          mt="8px"
        >
          {loading ? <Spinner color={COLORS.PRIMARY} /> : "Entrar"}
        </Button>
      </Flex>
      {props.children}
    </Flex>
  );
};
