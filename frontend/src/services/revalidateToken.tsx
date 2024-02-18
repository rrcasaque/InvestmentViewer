import { redirect } from "next/navigation";
import { validateToken } from "./serverActions";
import { AuthPage } from "@/modules/auth/auth";

export const revalidateToken = async (url?: string, auth?: boolean) => {
  const res = await validateToken();
  if (res && res.message && res.message === "token is valid!") {
    if (url) redirect(url);
  } else {
    return auth ? <AuthPage /> : redirect("/auth");
  }
};
