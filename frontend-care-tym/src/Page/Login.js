import { useContext, useState } from "react";
import NavBar from "../Component/NavBar";
import { Link } from "react-router-dom"
import AuthProvider from "../Auth/AuthProvider";

export default function Login() {

    const [key, setKey] = useState();
    const [password, setPassword] = useState();

    const {Login} = useContext(AuthProvider)

    const handleLogin = async(e) => {
        e.preventDefault()
        const data = {
            key,
            password
        }
        const response = await Login(data)

        if(response === 400) document.getElementById("response").innerHTML = "Usuario y/o contraseña incorrecta"
    }
    return (

        <div className="grid ">
            <NavBar />
            <div className="m-4 flex flex-col md:justify-self-center md:bg-slate-300 md:w-1/2 md:max-w-lg md:rounded-xl md:shadow-xl">
                <h1 className="font-semibold text-xl my-5 md:mt-10 md:text-center md:text-2xl">Acceso usuario</h1>
                <form onSubmit={handleLogin} className="grid gap-6 m-3">
                    <div className="">
                        <label className="my-2 block font-medium">Usuario</label>
                        <input required className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg block w-full p-2.5" onChange={(e) => setKey(e.target.value)} />
                    </div>
                    <div className="">
                        <label className="my-2 block font-medium">Contraseña</label>
                        <input required type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div id="response" className="text-red-500 text-center"></div>
                    <button type="submit" className="p-3 my-2 bg-green-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm">Iniciar sesión</button>
                    <Link to="/recovery" className="text-center">Se me olvidó la contraseña</Link>



                </form>
            </div>
        </div>
    )
}