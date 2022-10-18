import { useState } from "react";
import ListShort from "../../Component/Center/ListShort";
import BottonsCreate from "../../Component/Bottons/BottonsCreate"

export default function Specialty() {

    const [specialty, setSpecialty] = useState()

    return (
        <div className="my-5 sm:m-7 flex flex-col justify-center">
            <h1 className="text-center font-semibold text-xl">Administracion de especialidades</h1>
            <div className="flex flex-col sm:flex-row justify-center px-1">

                <ListShort api={"http://127.0.0.1:8000/api/center/specialty"} />

                <form className="my-5 sm:mx-4 sm:w-2/5 py-5 px-2 bg-gray-200 rounded-xl shadow-xl">
                    <h1 className="text-center text-lg font-semibold">Crear especialidad global</h1>
                    <h1 className="text-center text-xs font-light mb-5">La especialidades son globales, solo crea una nueva especialidad si no esta presente la especialiad que requieres, si una expecialidad se encuentra mal escrita contactar con el administrador.</h1>

                    <div className="flex flex-col">
                        <label className="my-2 block font-medium">Nombre especialidad</label>
                        <input className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" onChange={e => setSpecialty(e.target.value)} required />

                    </div>

                    <div className="my-2">
                        <BottonsCreate text={"Crear especialidad"} data={{nombre:specialty}} api={"http://127.0.0.1:8000/api/center/specialty"} />
                    </div>

                </form>
            </div>
        </div>
    )
}