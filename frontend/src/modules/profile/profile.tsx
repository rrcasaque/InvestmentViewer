import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import "@/styles/colors.css";

export const ProfilePage = () => {
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
          <h2 className="text-3xl">Rafael Rocha Casaque</h2>
          <h3 className="text-xl">rrcasaque@gmail.com</h3>
        </div>
      </div>
      <div className="w-full  text-white p-5">
        <h2 className="text-lg">
          Perfil de investidor: Investidor Moderado{" "}
          <span className="hover:cursor-pointer color-primary-white">
            (clique para refazer o teste)
          </span>
        </h2>
        <p className="text-justify mt-5">
          O investidor moderado é caracterizado por adotar uma abordagem
          equilibrada em relação ao risco e à segurança em seus investimentos.
          Este perfil busca uma combinação de crescimento e estabilidade em sua
          carteira. Embora esteja disposto a assumir alguns riscos a curto prazo
          em busca de retornos mais elevados, o investidor moderado procura
          manter uma diversificação adequada para reduzir a exposição a
          volatilidades extremas. Essa abordagem reflete uma postura mais
          cautelosa em comparação com investidores agressivos, que buscam altos
          retornos mesmo que isso envolva maior volatilidade. O investidor
          moderado geralmente opta por uma mistura de ativos de diferentes
          classes, como ações, títulos e possivelmente investimentos
          alternativos, buscando um equilíbrio entre crescimento e preservação
          de capital.
        </p>
      </div>
      <div className="flex w-full items-center justify-around p-5">
        <Button>Editar informações do usuário</Button>
      </div>
    </div>
  );
};
