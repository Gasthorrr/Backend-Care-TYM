import { useEffect, useState } from "react";
import { getRequest } from "../../../Services/Request";
import BottonsCreate from "../../Bottons/BottonsCreate";

export default function CreateMedic() {

    const [name,setName] = useState()
    const [rut,setRut] = useState()
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [specialty,setSpecialty] = useState()
    const [time,setTime] = useState()
    const [password,setPassword] = useState()

    const [loading, setLoading] = useState(true)
    const [dataSpecialty, setDataSpecialty] = useState()

    const data = {
        full_name: name,
        rut,
        email,
        phone,
        id_specialty : specialty,
        attencion_duration : time,
        password
    }
    useEffect(()=>{
        const getData = async() => {
            setDataSpecialty(await getRequest("http://127.0.0.1:8000/api/center/specialty/"))
            setLoading(false)
        }
        getData()
    },[])

    

    return (
        <form className="my-5 sm:mx-4 sm:w-2/5 py-5 px-2 bg-slate-50 rounded-xl shadow-lg h-fit">
            <h1 className="text-center text-xl font-semibold mb-5">Crear medico</h1>
            <div className="flex flex-col">
                <label className="my-2 block font-medium">Nombre completo</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setName(e.target.value)} required/>

                <label className="my-2 block font-medium">RUT</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setRut(e.target.value)} required/>

                <label className="my-2 block font-medium">Correo electronico</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setEmail(e.target.value)} type="email" required/>

                <label className="my-2 block font-medium">Telefono</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setPhone(e.target.value)} type="tel" required/>

                <label className="my-2 block font-medium">Especialidad</label>
                <select onChange={e=>setSpecialty(e.target.value)} className={"bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5"} required>
                    <option>Seleccione una especialidad</option>
                    {
                        loading ? (
                            <div>Cargando</div>
                        ) : (
                            dataSpecialty.map((x)=>(
                                <option value={x.id}>{x.name}</option>
                            ))
                        )
                    }
                </select>
                
                <label className="my-2 block font-medium">Duracion de atencion</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setTime(e.target.value)} type="number" required/>

                <label className="my-2 block font-medium">Contraseña</label>
                <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e=>setPassword(e.target.value)} type="password" required/>

                <div className="my-2">
                    <BottonsCreate text={"Crear medico"} data={data} api={"http://127.0.0.1:8000/api/center/medic"} action={"Medico"}/>
                </div>

            </div>

        </form>
    )
}