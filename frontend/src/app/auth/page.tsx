import { AuthPage } from "../../modules/auth/auth";
import { revalidateToken } from "../../services/revalidateToken";

const Auth = async () => {
  await revalidateToken("/app/dashboard", true);
  return <AuthPage />;
};

export default Auth;
