import { useEffect, useState } from "react";
import BottonsUpdate from "../../Bottons/BottonsUpdate";

export default function EditCoor(props) {

    useEffect(()=>{
        setName(props.edit.nombre_completo)
        setRut(props.edit.rut)
        setEmail(props.edit.correo)
        setCellphone(props.edit.telefono)
    },[props])

    const [name,setName] = useState()
    const [rut,setRut] = useState()
    const [email,setEmail] = useState()
    const [cellphone,setCellphone] = useState()
    const [password,setPassword] = useState()

    const data = {
        nombre_completo : name,
        rut,
        correo: email,
        telefono: cellphone,
        contraseña: password
    }

    return (
        <div className="my-5 sm:mx-4 sm:w-2/5 py-5 px-2 bg-gray-200 rounded-xl shadow-xl">
            <h1 className="text-center text-lg font-semibold mb-5">Editar coordinador</h1>
            <div className="flex flex-col">
                <label className="my-2 block font-medium">Nombre completo</label>
                <input className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" value={name} onChange={e=>setName(e.target.value)}/>

                <label className="my-2 block font-medium">RUT</label>
                <input className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" value={rut} onChange={e=>setRut(e.target.value)}/>

                <label className="my-2 block font-medium">Correo electronico</label>
                <input className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" value={email} onChange={e=>setEmail(e.target.value)}/>

                <label className="my-2 block font-medium">Telefono</label>
                <input className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" value={cellphone} onChange={e=>setCellphone(e.target.value)}/>

                <label className="my-2 block font-medium">Contraseña</label>
                <input className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setPassword(e.target.value)}/>

                <div className="my-2">
                    <BottonsUpdate text={"Actualizar coordinador"} data={data} api={"http://127.0.0.1:8000/api/center/coordinator/"+ props.edit.rut}/>
                </div>

            </div>

        </div>
    )
}