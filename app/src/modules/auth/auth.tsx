"use client";

import { Login } from "@/modules/auth/components/login/login";
import { Register } from "@/modules/auth/components/register/register";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";

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
      <Toaster />
      <div
        className="flex items-center justify-center w-full h-screen bg-black"
        style={{ perspective: "1300px" }}
      >
        <Login
          rotate={login.rotate}
          index={login.index}
          changePage={changePage}
        />
        <Register
          rotate={register.rotate}
          index={register.index}
          changePage={changePage}
        />
      </div>
    </>
  );
};
