import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');

  // Agar user nahi hai, toh use wapas signin/home page par bhej do
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Agar user hai, toh use Dashboard dikhao
  return children;
};

export default ProtectedRoute;