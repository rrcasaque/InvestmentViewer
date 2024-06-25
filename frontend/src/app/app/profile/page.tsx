import { unstable_noStore } from "next/cache";
import { Background } from "../../../components/background/background";
import { ProfilePage } from "../../../modules/profile/profile";
import { revalidateToken } from "../../../services/revalidateToken";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Profile() {
  const user = JSON.parse(cookies().get("autorizedUser")?.value as string);

  unstable_noStore();
  await revalidateToken();
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="-z-10 fixed w-full h-screen">
        <Background img={"/wallpaper2.webp"} />
      </div>
      <ProfilePage user={user} />
    </main>
  );
}
