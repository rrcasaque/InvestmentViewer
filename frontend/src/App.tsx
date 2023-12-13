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
import { SkeletonPage } from "./modules/SkeletonPage";

const protectedRoutes = ["/dashboard", "/profile", "/wallet"];

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [protectedPage, setProtectedPage] = useState(false);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (protectedRoutes.includes(window.location.pathname) && !isAuthenticated)
      validateToken();
    setLoading(false);
  }, [isAuthenticated]);

  const validateToken = async () => {
    setProtectedPage(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      await axios.get(API.AUTH.VALIDATE_TOKEN, {
        params: {
          validate: true,
        },
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      useAuthStore.setState({ isAuthenticated: true });
    } catch (error) {
      useAuthStore.setState({ isAuthenticated: false });
    }
    setProtectedPage(false);
  };

  return loading !== true && protectedPage !== true ? (
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
  ) : (
    <SkeletonPage />
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
