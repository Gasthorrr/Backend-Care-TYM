import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { UseLocalStorage } from "./UseLocalStorage";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const [user, setUser] = UseLocalStorage("user", null)
    const history = useNavigate()

    const Login = async (data) => {
        const resp = await fetch("http://127.0.0.1:8000/api/user/login/", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        if(resp.status === 200) {
            setUser(data)// se guarda jwt entregado la API

            history("/admin/") //temporal, a la espera del json entregado del backend, este tendra distintos navigate segun el tipo de user
        }

        
        return 400
    }

    const Logout = async () => {
        setUser(null)
        history("/")
    }

    const contextData = {
        user,
        Login,
        Logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
