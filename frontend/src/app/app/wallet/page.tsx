import { Background } from "../../../components/background/background";
import { WalletPage } from "../../../modules/wallet/wallet";
import { revalidateToken } from "../../../services/revalidateToken";

export default async function Wallet() {
  await revalidateToken();
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="-z-10 fixed w-full h-screen">
        <Background img={"/wallpaper3.jpg"} />
      </div>
      <WalletPage />
    </main>
  );
}
