import { useContext } from "react";
import { AuthContext } from "../contextProvider/contexts";


const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return { auth, setAuth };
};

export default useAuth;
