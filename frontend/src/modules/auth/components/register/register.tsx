"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import "@/styles/auth.css";
import "@/styles/colors.css";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import Image from "next/image";
import { registerUser } from "@/services/serverActions";
import { useToast } from "../../../../components/ui/use-toast";
import { useRouter } from "next/navigation";
import { setAuthCookies } from "@/services/manageCookies";
import { useState } from "react";
import { Spinner } from "../../../../components/ui/spinner";
import { useAuthStore } from "@/contexts/AuthStore";

const formSchema = z.object({
  email: z
    .string({ required_error: "esse campo é obrigatório" })
    .email({ message: "o e-mail não é válido" }),
  senha: z
    .string({ required_error: "esse campo é obrigatório" })
    .min(8, { message: "senha inválida" })
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      { message: "senha inválida" }
    ),
  nome: z.string({ required_error: "esse campo é obrigatório" }).min(10, {
    message: "deve conter no mínimo 10 caracteres",
  }),
});

interface RegisterProps {
  rotate: string;
  index: string;
  changePage: () => void;
}

export const Register = ({ index, rotate, changePage }: RegisterProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const res = await registerUser({
      name: values.nome,
      email: values.email,
      password: values.senha,
    });
    if (res.token) {
      setAuthCookies(res);
      useAuthStore.setState({
        token: res.token,
        isAuthenticated: true,
        user: res.autorizedUser,
      });
      router.push("/app/dashboard");
    } else {
      if (res.message === "this email is already in use")
        toast({
          title: "Acesso negado",
          variant: "destructive",
          description: "Esse e-mail já está em uso!",
        });
    }
    setLoading(false);
  }

  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="flex items-center justify-around absolute flex-col p-0 bg-complementary w-96 h-96 rounded-xl auth-card"
      style={{ transform: rotate, zIndex: index, backfaceVisibility: "hidden" }}
    >
      <div className="flex w-full items-center justify-center bg-primary">
        <Image src="/lightLogo.png" alt={"aa"} width="200" height="100" />
      </div>
      <div className="flex items-center justify-center w-full h-84">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-3/4 flex items-center flex-col"
          >
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem className="w-full my-1">
                  <FormLabel className="text-black">Nome:</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-300"
                      placeholder="Digite seu nome completo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full my-1">
                  <FormLabel className="text-black">E-mail:</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-300"
                      placeholder="Digite seu endereço de e-mail"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="senha"
              render={({ field }) => (
                <FormItem className="w-full my-1">
                  <FormLabel className="text-black">Senha:</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-300"
                      placeholder="Digite sua senha de acesso"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-40 bg-primary text-white hover:bg-primary hover:brightness-75 font-semibold my-4"
              type="submit"
            >
              {loading ? <Spinner /> : "Cadastrar"}
            </Button>
          </form>
        </Form>
      </div>
      <p
        className="text-black hover:underline hover:cursor-pointer"
        onClick={changePage}
      >
        Já possui cadastro? Faça Login
      </p>
    </div>
  );
};
