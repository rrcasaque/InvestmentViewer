import { useToast } from "@/components/ui/use-toast";
import { useAuthStore } from "@/contexts/AuthStore";
import { closeModal } from "@/contexts/ModalStore";
import { updateInvestType } from "@/services/serverActions";
import { useState } from "react";

const questions = [
  {
    quest: "Quanto tempo você planeja manter seus investimentos?",
    responseA: "Mais de 10 anos",
    responseB: "Entre 5 e 10 anos",
    responseC: "Menos de 5 anos",
  },
  {
    quest: "Como você se sente em relação a riscos em seus investimentos?",
    responseA: "Prefiro evitar riscos e focar na segurança",
    responseB: "Aceito alguns riscos para obter melhores retornos",
    responseC: "Estou confortável com riscos altos para maximizar retornos",
  },
  {
    quest: "Qual é o objetivo principal dos seus investimentos?",
    responseA: "Proteger meu capital e garantir segurança",
    responseB: "Crescimento moderado com algum nível de segurança",
    responseC: "Crescimento agressivo e maximização dos retornos",
  },
  {
    quest:
      "Se seus investimentos perdessem 10% do seu valor em um curto período, você:",
    responseA: "Ficaria muito preocupado e consideraria vender",
    responseB: "Observaria a situação antes de tomar qualquer decisão",
    responseC: "Consideraria uma oportunidade para comprar mais",
  },
  {
    quest: "Quando pensa em investir, o que é mais importante para você?",
    responseA: "Segurança do capital investido",
    responseB: "Um equilíbrio entre risco e retorno",
    responseC: "Potencial de alto retorno",
  },
  {
    quest: "Qual é a sua experiência anterior com investimentos?",
    responseA: "Pouca ou nenhuma experiência",
    responseB: "Alguma experiência, conheço os principais produtos",
    responseC:
      "Experiência substancial, estou confortável com mercados complexos",
  },
  {
    quest:
      "Quanto do seu portfólio você está disposto a investir em ativos de alto risco?",
    responseA: "Nada ou quase nada",
    responseB: "Uma parte moderada, até 30%",
    responseC: "Uma grande parte, mais de 30%",
  },
  {
    quest: "Como você prefere aprender sobre seus investimentos?",
    responseA: "Prefiro opções seguras e bem explicadas por um consultor",
    responseB: "Gosto de estudar minhas opções com detalhes moderados",
    responseC:
      "Faço minha própria pesquisa e estou sempre procurando novas oportunidades",
  },
  {
    quest: "Qual a importância do acesso imediato ao seu dinheiro investido?",
    responseA:
      "Muito importante, quero poder acessar meu dinheiro a qualquer momento",
    responseB: "Importante, mas posso esperar se necessário",
    responseC: "Posso deixar meu dinheiro investido por longos períodos",
  },
  {
    quest: "Você prefere investimentos que ofereçam:",
    responseA: "Retornos garantidos, mesmo que menores",
    responseB: "Uma mistura de estabilidade e potencial de crescimento",
    responseC: "O maior retorno possível, mesmo com grandes flutuações",
  },
  {
    quest:
      "Qual porcentagem do seu rendimento anual você está disposto a investir?",
    responseA: "Menos de 10%",
    responseB: "Entre 10% e 30%",
    responseC: "Mais de 30%",
  },
  {
    quest:
      "Quão dependente você é dos retornos dos seus investimentos para seu sustento diário?",
    responseA: "Muito dependente, é uma parte crucial da minha renda",
    responseB: "Parcialmente dependente, complementa minha renda",
    responseC:
      "Pouco ou nada dependente, é mais para crescimento de patrimônio",
  },
  {
    quest:
      "Em quanto tempo você espera usar o dinheiro dos seus investimentos?",
    responseA: "Em menos de 5 anos",
    responseB: "Entre 5 e 15 anos",
    responseC: "Mais de 15 anos",
  },
  {
    quest: "Qual dessas opções descreve melhor sua situação financeira atual?",
    responseA: "Estável, com pouca necessidade de renda extra",
    responseB: "Estável, mas buscando melhorar minha situação financeira",
    responseC: "Flexível, buscando maximizar investimentos",
  },
  {
    quest: "Como você reagiria a uma crise financeira global?",
    responseA: "Venderia a maioria dos meus investimentos para evitar perdas",
    responseB: "Manteria meus investimentos e aguardaria a recuperação",
    responseC: "Investiria mais para aproveitar os preços baixos",
  },
  {
    quest: "Quais tipos de investimentos você prefere?",
    responseA: "Títulos de renda fixa e contas de poupança",
    responseB: "Uma combinação de ações e títulos",
    responseC: "Principalmente ações e fundos de investimento",
  },
  {
    quest: "Como você prefere gerenciar seus investimentos?",
    responseA: "Através de um gestor de investimentos ou consultor financeiro",
    responseB:
      "Com uma abordagem mista, algumas decisões minhas, outras com consultoria",
    responseC: "Eu mesmo gerencio e tomo todas as decisões",
  },
  {
    quest:
      "Quanto de seu portfólio você está disposto a perder em um ano ruim para a possibilidade de ganhos significativos a longo prazo?",
    responseA: "Menos de 5%",
    responseB: "Até 15%",
    responseC: "Mais de 15%",
  },
  {
    quest:
      "Se você tivesse um ganho inesperado, como um bônus ou herança, o que faria com esse dinheiro?",
    responseA:
      "Colocaria em uma conta de poupança ou CD (certificado de depósito)",
    responseB: "Investiria em uma carteira diversificada de ações e títulos",
    responseC: "Reinvestiria em oportunidades de alto risco e alto retorno",
  },
];

const QUESTIONS_PER_PAGE = 4;

export const Quests = () => {
  const { toast } = useToast();

  const [page, setPage] = useState(0);
  const [responses, setResponsesLocal] = useState<string[]>(
    new Array(questions.length).fill("")
  );

  const handleResponseChange = (index: number, response: string) => {
    const newResponses = [...responses];
    newResponses[index] = response;
    setResponsesLocal(newResponses);
  };

  const mostFrequent = (arr: string[]): number => {
    let countA = 0;
    let countB = 0;
    let countC = 0;

    for (let str of arr) {
      if (str.toLowerCase() === "a") countA++;
      else if (str.toLowerCase() === "b") countB++;
      else if (str.toLowerCase() === "c") countC++;
    }

    if (countA > countB && countA > countC) return 1;
    if (countB > countA && countB > countC) return 2;
    if (countC > countA && countC > countB) return 3;

    if (countA === countB && countA > countC) return 2;
    if (countB === countC && countB > countA) return 3;
    if (countA === countC && countA > countB) return 3;

    if (countA === countB && countB === countC) return 3;

    return 0;
  };

  const handleSubmit = async () => {
    if (responses.includes("")) {
      toast({
        variant: "destructive",
        title: "Erro",
        description:
          "Você deve responder todas as questões para enviar o teste!",
      });
    } else {
      try {
        const investType = mostFrequent(responses);
        const res = await updateInvestType(investType);
        useAuthStore.setState((state) => ({
          user: {
            ...state.user,
            investType: String(investType),
          },
        }));
      } catch (error: any) {}
      closeModal();
    }
  };

  const startIndex = page * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + QUESTIONS_PER_PAGE
  );

  return (
    <div>
      {currentQuestions.map((q, index) => (
        <div key={startIndex + index}>
          <p className="font-bold">{q.quest}</p>
          <div className="flex  justify-center flex-col">
            <label>
              <input
                type="radio"
                name={`question-${startIndex + index}`}
                value="A"
                checked={responses[startIndex + index] === "A"}
                onChange={() => handleResponseChange(startIndex + index, "A")}
              />
              {q.responseA}
            </label>
            <label>
              <input
                type="radio"
                name={`question-${startIndex + index}`}
                value="B"
                checked={responses[startIndex + index] === "B"}
                onChange={() => handleResponseChange(startIndex + index, "B")}
              />
              {q.responseB}
            </label>
            <label>
              <input
                type="radio"
                name={`question-${startIndex + index}`}
                value="C"
                checked={responses[startIndex + index] === "C"}
                onChange={() => handleResponseChange(startIndex + index, "C")}
              />
              {q.responseC}
            </label>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-around w-80">
          {page !== 0 && (
            <button
              className="bg-slate-500 rounded-lg w-32 text-white"
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            >
              Anterior
            </button>
          )}
          {startIndex + QUESTIONS_PER_PAGE < questions.length && (
            <button
              className="border-slate-500 border-[1px] rounded-lg w-32"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Próximo
            </button>
          )}
          {startIndex + QUESTIONS_PER_PAGE >= questions.length && (
            <button
              className="border-slate-500 border-[1px] rounded-lg w-32"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
