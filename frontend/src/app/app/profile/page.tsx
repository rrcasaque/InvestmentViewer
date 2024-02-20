import { Background } from "../../../components/background/background";
import { ProfilePage } from "../../../modules/profile/profile";
import { revalidateToken } from "../../../services/revalidateToken";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default async function Profile() {
  await revalidateToken();
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="-z-10 fixed w-full h-screen">
        <Background img={"/wallpaper2.webp"} />
      </div>
      <ProfilePage />
    </main>
  );
}
