import { createContext } from "react";
import { useNavigate } from "react-router-dom";
//import { UseLocalStorage } from "./UseLocalStorage";
import jwt from "jwt-decode"


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    //const [user, setUser] = UseLocalStorage("auth-token", null)
    const history = useNavigate()

    const Login = async (data) => {
        const resp = await fetch("http://127.0.0.1:8000/api/login/", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        if (resp.status === 200) {

            const token = await resp.json();

            sessionStorage.setItem("auth-token", token)// se guarda jwt entregado la API
            const decode = jwt(token)
            if(decode.roles === "centro_medico" || decode.roles === "cadena_medica"){
                sessionStorage.setItem("title", decode.key)
            }else{
                sessionStorage.setItem("title", "CareTYM")
            }

            if (decode.rol === "administrador"){
                return history("/admin/")
            }else if(decode.rol === "cadena_medica"){
                return history("/chain/")
            }

        }


        return 400
    }

    const Logout = async () => {
        //setUser(null)
        sessionStorage.clear("auth-token")
        history("/")
    }

    const contextData = {
        Login,
        Logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
