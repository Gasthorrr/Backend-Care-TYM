import NavBar from "../Component/NavBar";
import {Link} from "react-router-dom"

export default function Login() {
    return (
        <div className="grid ">
            <NavBar />
            <div className="m-4 flex flex-col md:justify-self-center md:bg-slate-300 md:w-1/2 md:max-w-lg md:rounded-xl md:shadow-xl">
                <h1 className="font-semibold text-xl my-5 md:mt-10 md:text-center md:text-2xl">Acceso usuario</h1>
                <form className="grid gap-6 m-3">
                    <div className="">
                        <label className="my-2 block font-medium">Usuario</label>
                        <input className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg block w-full p-2.5" />
                    </div>
                    <div className="">
                        <label className="my-2 block font-medium">Contraseña</label>
                        <input type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5"/>
                    </div>
                    <button className="p-3 my-2 bg-green-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm">Iniciar sesión</button>
                    <Link to="/recovery" className="text-center">Se me olvidó la contraseña</Link>



                </form>
            </div>
        </div>
    )
}