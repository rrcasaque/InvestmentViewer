import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "./modules/AuthPage";
import { LandingPage } from "./modules/LandingPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfilePage name={""} bio={""} password={""} />
            </ProtectedRoute>
          }
        /> */}
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
    return <Navigate to="/unauthenticated" replace />;
  }
  return props.children;
};
