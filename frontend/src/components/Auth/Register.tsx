import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
//   import { urlApi } from "../consts/paths";
//   import { useAuthStore } from "../contexts/AuthStore";
import { useToast } from "@chakra-ui/react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface RegisterProps {
  rotate: string;
  index: string;
  children: React.ReactNode;
}

export const Register = (props: RegisterProps) => {
  // const navigate = useNavigate();
  const toast = useToast();

  const [bDate, setBDate] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      backgroundImage="linear-gradient(to left top, #2a32e7, #0052f2, #006bf9, #0081fc, #2496fc, #4f98fc, #699afc, #7e9cfc, #9f89f5, #c171e4, #df52c8, #f423a2)"
      direction="column"
      style={{ backfaceVisibility: "hidden" }}
      transform={props.rotate}
      zIndex={props.index}
    >
      <Text fontSize="36px" w="100%" align="center">
        Sign Up
      </Text>
      <Flex as="form" w="75%" direction="column" justify="center">
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
          <FormLabel>Login:</FormLabel>
          <Input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            bg="#ccc"
            type="text"
            placeholder="Digite seu username"
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
          <FormLabel>Data de nascimento:</FormLabel>
          <Input
            value={bDate}
            onChange={(e) => {
              setBDate(e.target.value);
            }}
            bg="#ccc"
            type="date"
          />
        </FormControl>
        <FormControl mb="8px">
          <FormLabel>Senha:</FormLabel>
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            bg="#ccc"
            type="password"
            placeholder="Digite sua senha de acesso"
          />
        </FormControl>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            registerUser(
              username,
              email,
              password,
              name,
              new Date(
                parseInt(bDate.slice(0, 4)),
                parseInt(bDate.slice(5, 7)),
                parseInt(bDate.slice(8, 10))
              ),
              // navigate,
              toast
            );
          }}
          colorScheme="blackAlpha"
          w="50%"
          alignSelf="center"
          mt="8px"
        >
          Cadastrar
        </Button>
      </Flex>
      {props.children}
    </Flex>
  );
};

const registerUser = async (
  username: string,
  email: string,
  password: string,
  name: string,
  bDate: Date,
  toast: any
) => {
  const payload = {
    email: email,
    name: name,
    username: username,
    password: password,
    birthDate:
      bDate.getFullYear().toString() +
      "-" +
      bDate.getMonth().toString().padStart(2, "0") +
      "-" +
      bDate.getDate().toString().padStart(2, "0"),
  };

  // await axios
  //   .post(urlApi + "/user", payload)
  //   .then((res) => {
  //     const login = useAuthStore((state) => state.login);
  //     login();
  //     navigate("/home");
  //   })
  //   .catch((err) => {
  //     return toast({
  //       title: "Erro",
  //       description: "O usuário não foi cadastrado com sucesso",
  //       status: "faied",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   });
};
