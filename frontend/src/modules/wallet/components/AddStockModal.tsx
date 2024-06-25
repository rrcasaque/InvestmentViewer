import { CustomModal } from "@/components/modal/CustomModal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { EModals, closeModal, useModalStore } from "@/contexts/ModalStore";
import { useStockStore } from "@/contexts/StockStore";
import { ECategory } from "@/models/Stock";
import { addStock, getStocks } from "@/services/serverActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  amount: z.string({ required_error: "esse campo é obrigatório" }),
  buyValue: z.string({ required_error: "esse campo é obrigatório" }),
  category: z.string({ required_error: "esse campo é obrigatório" }),
  refName: z.string({ required_error: "esse campo é obrigatório" }),
});

export const AddStockModal = () => {
  const modalState = useModalStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await addStock({
        amount: Number(values.amount),
        buyValue: Number(values.buyValue),
        category: ECategory.CDB,
        refName: values.refName,
      });
      const stockList = await getStocks();

      useStockStore.setState({
        stockList: stockList,
      });
      closeModal();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const { toast } = useToast() as any;
  const [loading, setLoading] = useState(false);

  return (
    <CustomModal
      open={modalState.open && modalState.display === EModals.AddStockModal}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex items-center flex-col"
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full my-1">
                <FormLabel className="text-black">
                  Categoria de investimento:
                </FormLabel>
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
            name="refName"
            render={({ field }) => (
              <FormItem className="w-full my-1">
                <FormLabel className="text-black">Código da ação:</FormLabel>
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
            name="buyValue"
            render={({ field }) => (
              <FormItem className="w-full my-1">
                <FormLabel className="text-black">Preço de compra:</FormLabel>
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
            name="amount"
            render={({ field }) => (
              <FormItem className="w-full my-1">
                <FormLabel className="text-black">Quantidade:</FormLabel>
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
          <Button
            className="w-40 bg-complementary text-black hover:bg-complementary hover:brightness-75 font-semibold"
            type="submit"
          >
            {loading ? <Spinner /> : "Adicionar"}
          </Button>
        </form>
      </Form>
    </CustomModal>
  );
};
