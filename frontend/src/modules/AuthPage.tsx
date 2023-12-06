import { Flex, Link } from "@chakra-ui/react";
import { useState } from "react";
import { Login } from "../components/Auth/Login";
import { Register } from "../components/Auth/Register";

export const AuthPage = () => {
  const [start, setStart] = useState(true);
  const [login, setLogin] = useState({ rotate: "", index: "1" });
  const [register, setRegister] = useState({
    rotate: "rotateY(-180deg)",
    index: "",
  });

  const changePage = () => {
    if (start) {
      setLogin({ rotate: "rotateY(180deg)", index: "0" });
      setRegister({ rotate: "rotateY(0)", index: "1" });
    } else {
      setLogin({ rotate: "", index: "1" });
      setRegister({ rotate: "rotateY(-180deg)", index: "" });
    }
    setStart(!start);
  };

  return (
    <>
      <Flex
        style={{ perspective: "1100px" }}
        minH="100vh"
        w="100%"
        align="center"
        justify="center"
        bg="black"
      >
        <Login rotate={login.rotate} index={login.index}>
          <Link textAlign="center" color="white" onClick={changePage}>
            Não possui cadastro? Cadastre-se
          </Link>
        </Login>
        <Register rotate={register.rotate} index={register.index}>
          <Link textAlign="center" color="white" onClick={changePage}>
            Já possui cadastro? Faça Login
          </Link>
        </Register>
      </Flex>
    </>
  );
};
