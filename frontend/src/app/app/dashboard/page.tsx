import { Background } from "../../../components/background/background";
import { DashboardPage } from "../../../modules/dashboard/dashboard";
import { revalidateToken } from "../../../services/revalidateToken";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await revalidateToken();
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="-z-10 fixed w-full h-screen">
        <Background img={"/wallpaper.jpg"} />
      </div>
      <DashboardPage />
    </main>
  );
}
