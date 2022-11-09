import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Schedule() {

    const { center } = useParams()

    const history = useNavigate()

    const [rut, setRut] = useState("")
    const [password, setPassword] = useState("")


    //Realiza consulta a backend para verificar si el usuario existe
    const handleRut = (e,rut) => {
        e.preventDefault()
        //se valida antes uwu
        if (rut === "20") {
            document.getElementById("password").className += "block"
            document.getElementById("password-input").focus()
            document.getElementById("button").onclick = handleValidation
            document.getElementById("button").innerText = "Iniciar sesion"
        } else {
             history("/register/"+rut)
        }
    }

    const handleValidation = () => {
        console.log("Estoy validando xd")



    }

    return (
        <div className="flex justify-center">
            <div className="my-5 sm:mx-4 sm:w-[700px] py-5 px-2 bg-slate-50 rounded-xl shadow-lg flex flex-col justify-center">
                <h1 className="font-semibold text-2xl text-center">{center}</h1>
                <h1 className="font-medium text-xl text-center my-4">Sistema de agendamiento de horas medicas</h1>

                <form className="mx-32">
                    <label className="my-2 block font-medium">Ingresa tu RUT</label>
                    <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" value={rut} onChange={e => setRut(e.target.value)} />
                    <div id="password" className="my-4 hidden">
                        <label className="my-2 block font-medium">Ingresa tu contraseña</label>
                        <input id="password-input" className="my-2 bg-gray-100 border border-gray-500 rounded-lg shadow-lg w-full p-2.5 block" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button id="button" className="my-2 p-2 ml-0 text-white border-2 bg-blue-700 rounded-lg text-lg font-medium w-full" onClick={(e) => handleRut(e,rut)}>Siguiente</button>
                </form>






            </div>

        </div>
    )
}