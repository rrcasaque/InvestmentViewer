import { Sidebar } from "@/components/sidebar/sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen">
      <Sidebar />
      <section style={{ width: "calc(100vw - 288px)", marginLeft: "288px" }}>
        {children}
      </section>
    </main>
  );
};

export default AppLayout;
