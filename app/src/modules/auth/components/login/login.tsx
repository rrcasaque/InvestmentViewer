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
import { Switch } from "../../../../components/ui/switch";
import { Label } from "../../../../components/ui/label";
import { useToast } from "../../../../components/ui/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { loginUser } from "@/services/serverActions";
import { setAuthCookies } from "@/services/manageCookies";
import { Spinner } from "../../../../components/ui/spinner";

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
});

interface LoginProps {
  rotate: string;
  index: string;
  changePage: () => void;
}

export const Login = ({ index, rotate, changePage }: LoginProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const res = await loginUser({
      email: values.email,
      password: values.senha,
      keepConnected: keepConnected === 0 ? false : true,
    });
    if (res.token) {
      setAuthCookies(res);
      router.push("/app/dashboard");
    } else {
      toast({
        variant: "destructive",
        description: "Acesso negado, credenciais incorretas",
      });
    }
    setLoading(false);
  }

  const [keepConnected, setKeepConnected] = useState(0);
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="flex items-center justify-around absolute flex-col p-0 bg-primary w-96 h-96 rounded-xl auth-card"
      style={{ transform: rotate, zIndex: index }}
    >
      <div className="flex w-full items-center justify-center bg-complementary">
        <Image src="/darkLogo.png" alt={"aa"} width="200" height="100" />
      </div>
      <div className="flex items-center justify-center w-full h-80">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-3/4 flex items-center flex-col"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full my-1">
                  <FormLabel className="text-white">E-mail:</FormLabel>
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
                  <FormLabel className="text-white">Senha:</FormLabel>
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
            <div className="flex items-center space-x-2 my-4">
              <Switch
                value={keepConnected}
                style={{
                  backgroundColor: keepConnected === 0 ? "#6b7b8b" : "",
                }}
                onClick={() => {
                  setKeepConnected(keepConnected === 0 ? 1 : 0);
                }}
              />
              <Label className="text-white">Manter-me conectado</Label>
            </div>
            <Button
              className="w-40 bg-complementary text-black hover:bg-complementary hover:brightness-75 font-semibold"
              type="submit"
            >
              {loading ? <Spinner /> : "Entrar"}
            </Button>
          </form>
        </Form>
      </div>
      <p
        className="text-white hover:underline hover:cursor-pointer"
        onClick={changePage}
      >
        Não possui cadastro? Cadastre-se
      </p>
    </div>
  );
};
