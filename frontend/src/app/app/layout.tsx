import { cookies } from "next/headers";
import { Sidebar } from "../../components/sidebar/sidebar";

export const dynamic = "force-dynamic";

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const user = JSON.parse(cookieStore.get("autorizedUser")?.value as string);
  return (
    <main className="w-full h-screen">
      <Sidebar user={user} />
      <section style={{ width: "calc(100vw - 288px)", marginLeft: "288px" }}>
        {children}
      </section>
    </main>
  );
};

export default AppLayout;
