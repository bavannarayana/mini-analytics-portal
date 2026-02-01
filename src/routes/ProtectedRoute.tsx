import { Navigate } from "react-router-dom";

import type { ReactNode } from "react";
import useAuthStore from "../store/authStore";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const user = useAuthStore((s) => s.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
