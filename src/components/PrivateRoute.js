import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

// Higher order component
// It will take another component as an argument

function PrivateRoute({ children }) {
   
  const auth = useAuth();  // boolean value
  return auth ? children : <Navigate to="/login" />;  // ternary operator
}

export default PrivateRoute;