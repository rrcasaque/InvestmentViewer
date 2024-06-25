import { cookies } from "next/headers";
import { Sidebar } from "../../components/sidebar/sidebar";

const user = JSON.parse(cookies().get("autorizedUser")?.value as string);

const AppLayout = ({ children }: { children: React.ReactNode }) => {
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
