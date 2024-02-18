"use client";

import "@/styles/colors.css";
import Image from "next/image";
import Link from "next/link";
import { Profile } from "../profile/profile";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col items-center justify-around bg-primary-dark w-72 h-screen fixed z-10">
      <Image src={"/lightLogo.png"} alt={""} width={240} height={100} />
      <div className="flex flex-col items-center justify-between h-40 w-full">
        <Link
          className={`${
            path === "/app/dashboard" ? "bg-primary-white" : "bg-primary"
          } w-11/12 rounded-lg p-2.5 text-white font-semibold hover:bg-primary`}
          href={"/app/dashboard"}
        >
          Dashboard
        </Link>
        <Link
          className={`${
            path === "/app/wallet" ? "bg-primary-white" : "bg-primary"
          } w-11/12 rounded-lg p-2.5 text-white font-semibold hover:bg-primary`}
          href={"/app/wallet"}
        >
          Carteira
        </Link>
        <Link
          className={`${
            path === "/app/profile" ? "bg-primary-white" : "bg-primary"
          } w-11/12 rounded-lg p-2.5 text-white font-semibold hover:bg-primary `}
          href={"/app/profile"}
        >
          Perfil
        </Link>
      </div>
      <Profile />
    </div>
  );
};
