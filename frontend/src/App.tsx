import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "./modules/AuthPage";
import { LandingPage } from "./modules/LandingPage";
import { NotFoundPage } from "./modules/NotFoundPage";
import { DashBoardPage } from "./modules/DashBoardPage";
import { UnauthorizedPage } from "./modules/UnauthorizedPage";
import { RecoveryPassword } from "./modules/RecoveryPage";
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "./consts/endpoints";
import { useAuthStore } from "./contexts/AuthStore";
import { ProfilePage } from "./modules/ProfilePage";
import { WalletPage } from "./modules/WalletPage";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const validateToken = async () => {
      try {
        await axios.post(API.AUTH.VALIDATE_TOKEN, {
          token: localStorage.getItem("token"),
        });
        useAuthStore.setState({ isAuthenticated: true });
        setLoading(false);
      } catch (error) {
        console.log(error);
        useAuthStore.setState({ isAuthenticated: false });
        setLoading(false);
      }
    };

    validateToken();
  }, [isAuthenticated]);

  return loading ? (
    <h1>carregando</h1>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/recovery" element={<RecoveryPassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wallet"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <WalletPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactElement;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  if (!props.isAuthenticated) {
    return <Navigate to="/unauthorized" replace />;
  }
  return props.children;
};
