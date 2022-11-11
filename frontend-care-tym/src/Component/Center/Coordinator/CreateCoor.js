import { useState } from "react";
import BottonsCreate from "../../Bottons/BottonsCreate";

export default function CreateCoor() {

    const [name,setName] = useState()
    const [rut,setRut] = useState()
    const [email,setEmail] = useState()
    //const [phone,setPhone] = useState()
    const [password,setPassword] = useState()

    const data = {
        full_name : name,
        rut,
        email,
        //phone,
        password
    }

    return (
        <form className="my-5 sm:mx-4 sm:w-2/5 py-5 px-2 bg-slate-50 rounded-xl shadow-xl">
            <h1 className="text-center text-lg font-semibold mb-5">Crear coordinador</h1>
            <div className="flex flex-col">
                <label className="my-2 block font-medium">Nombre completo</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setName(e.target.value)} required/>

                <label className="my-2 block font-medium">RUT</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setRut(e.target.value)} required/>

                <label className="my-2 block font-medium">Correo electronico</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setEmail(e.target.value)} type="email" required/>

                <label className="my-2 block font-medium">Contraseña</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setPassword(e.target.value)} type="password" required/>

                <div className="my-2">
                    <BottonsCreate text={"Crear coordinador"} data={data} api={"http://127.0.0.1:8000/api/center/coordinator"}/>
                </div>

            </div>

        </form>
    )
}