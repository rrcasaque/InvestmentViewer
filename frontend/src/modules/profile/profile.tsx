"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import "@/styles/colors.css";
import { InvestTestModal } from "./components/InvestTestModal";
import { EModals, openModal } from "@/contexts/ModalStore";

interface ProfilePageProps {
  user: any;
}

export const ProfilePage = ({ user }: ProfilePageProps) => {
  const investTypeFnc = () => {
    switch (user.investType) {
      case "1":
        return [
          "Investidor Conservador ",
          "O investidor conservador é aquele que prioriza a segurança e a preservação do capital acima de tudo. Este perfil busca investimentos de baixo risco e que ofereçam uma estabilidade de retorno, mesmo que isso signifique abrir mão de maiores ganhos. Normalmente, suas escolhas incluem produtos como títulos públicos, CDBs de grandes bancos, e fundos de renda fixa. O investidor conservador valoriza a previsibilidade e prefere evitar oscilações bruscas no valor de seus investimentos, sendo ideal para aqueles que possuem aversão a riscos e preferem uma abordagem cautelosa.",
        ];
      case "2":
        return [
          "Investidor Moderado ",
          "O investidor moderado está disposto a correr um pouco mais de risco em busca de retornos mais atrativos, mas ainda preza pela segurança em boa parte de sua carteira. Este perfil é equilibrado, misturando investimentos de renda fixa com uma parcela de renda variável. As escolhas comuns incluem fundos multimercado, ações de empresas consolidadas, e debêntures de boas companhias. O investidor moderado tem uma visão de longo prazo e está preparado para suportar algumas flutuações no valor de seus investimentos, buscando um crescimento mais consistente e controlado do seu patrimônio.",
        ];
      case "3":
        return [
          "Investidor Arrojado ",
          "O investidor arrojado é aquele que busca maximizar seus ganhos e está disposto a enfrentar altos níveis de risco para atingir seus objetivos. Este perfil é caracterizado por uma maior exposição a ativos de renda variável, como ações de empresas emergentes, fundos de investimento em ações, e investimentos alternativos, como criptomoedas. O investidor arrojado entende que grandes retornos vêm acompanhados de uma maior volatilidade e está preparado para oscilações significativas no valor de sua carteira. Esse perfil é indicado para aqueles que possuem uma visão estratégica, maior tolerância ao risco e um horizonte de investimento de longo prazo.",
        ];
    }
  };

  const investUser = investTypeFnc();

  return (
    <div
      className="bg-black bg-opacity-85 backdrop-blur-sm rounded-2xl flex items-start flex-col justify-between"
      style={{ width: "calc(100% - 52px)", height: "calc(100% - 52px)" }}
    >
      <div className="flex h-32 items-center m-5">
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-white ml-4">
          <h2 className="text-3xl">{user.name}</h2>
          <h3 className="text-xl">{user.email}</h3>
        </div>
      </div>
      <div className="w-full  text-white p-5">
        <h2 className="text-lg">
          Perfil de investidor: {investUser && investUser[0]}
          {user.investType === "" && (
            <span
              className="hover:cursor-pointer color-primary-white"
              onClick={() => openModal(EModals.InvestTestModal)}
            >
              (clique para fazer o teste)
            </span>
          )}
          {user.investType !== "" && (
            <span
              className="hover:cursor-pointer color-primary-white"
              onClick={() => openModal(EModals.InvestTestModal)}
            >
              (clique para refazer o teste)
            </span>
          )}
        </h2>
        {user.investType != "" && (
          <p className="text-justify mt-5">{investUser && investUser[1]}</p>
        )}
      </div>
      <div className="flex w-full items-center justify-around p-5">
        <Button>Editar informações do usuário</Button>
      </div>
      <InvestTestModal />
    </div>
  );
};
