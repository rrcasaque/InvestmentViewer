"use client";

import "../../styles/colors.css";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState, useEffect } from "react";
import { removeAllCookies } from "../../services/manageCookies";
import { useRouter } from "next/navigation";

export const Profile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const outsideClickListener = (event: any) => {
      const menuRef = document.getElementById("profile-menu");
      if (menuRef && !menuRef.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", outsideClickListener);

    return () =>
      document.removeEventListener("mousedown", outsideClickListener);
  }, []);

  return (
    <div
      className="flex w-11/12 items-center justify-around border-solid border p-1 rounded-full relative hover:cursor-pointer"
      onClick={() => setShowMenu(true)}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-end justify-center mx-1 text-white">
        <h3>Rafael Rocha Casaque</h3>
        <p>rrcasaque@hotmail.com</p>
      </div>
      {showMenu && (
        <div
          id="profile-menu"
          className="absolute bg-white top-0 w-11/12 rounded-sm p-0.5 -translate-y-11"
        >
          <ul>
            <li
              className="hover:cursor-pointer hover:bg-primary hover:text-white p-1 pl-1.5"
              onClick={() => {
                removeAllCookies();
                router.push("/");
              }}
            >
              Sair
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
