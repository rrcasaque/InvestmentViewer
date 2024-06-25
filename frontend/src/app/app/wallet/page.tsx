import { unstable_noStore } from "next/cache";
import { Background } from "../../../components/background/background";
import { WalletPage } from "../../../modules/wallet/wallet";
import { revalidateToken } from "../../../services/revalidateToken";
import { getStocks } from "@/services/serverActions";

export const dynamic = "force-dynamic";

export default async function Wallet() {
  unstable_noStore();
  await revalidateToken();
  const stockList = await getStocks(); // Obtenha os dados aqui

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="-z-10 fixed w-full h-screen">
        <Background img={"/wallpaper3.jpg"} />
      </div>
      <WalletPage initialStockList={stockList} />{" "}
      {/* Passe os dados como props */}
    </main>
  );
}
