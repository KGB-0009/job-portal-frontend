import { Navigate } from "react-router-dom";

function AdminProtectedRoute({ children }) {
  const isAdminLoggedIn = localStorage.getItem("admin");

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default AdminProtectedRoute;