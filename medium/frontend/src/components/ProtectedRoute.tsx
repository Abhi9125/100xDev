import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("userInfo");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  console.log(token);
  return children;
}
