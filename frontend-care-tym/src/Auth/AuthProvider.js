import { Children, createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { UseLocalStorage } from "./UseLocalStorage";

const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    const [user, setUser] = UseLocalStorage("user", null)
    const history = useNavigate()

    const Login = async(data) =>{
        
        setUser(data)
        history("/admin/home") //temporal, a la espera del json entregado del backend, este tendra distintos navigate segun el tipo de user

    }

    const Logout = async() =>{
        setUser(null)
        history("/")
    }

    const value = useMemo(
        ()=>({
        user,
        Login,
        Logout
    }),
    [user])

    return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
  };