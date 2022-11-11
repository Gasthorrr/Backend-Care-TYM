import { useState } from "react";
import BottonsCreate from "../../Bottons/BottonsCreate"

export default function CreateSpecialty(){

    const [specialty, setSpecialty] = useState()

    return(
        <form className="my-5 sm:mx-4 sm:w-2/5 py-5 px-2 bg-slate-50 rounded-xl shadow-lg">
                    <h1 className="text-center text-lg font-semibold">Agregar especialidad</h1>
                    <h1 className="text-center text-xs font-light mb-5">Recuerda que la especialidad solo se agregara al centro medico, esto no afecta a la cadena medica.</h1>

                    <div className="flex flex-col">
                        <label className="my-2 block font-medium">Nombre especialidad</label>
                        <input className="bg-gray-100 border border-gray-500 rounded-lg shadow-lg block w-full p-2.5" onChange={e => setSpecialty(e.target.value)} required />


                    </div>

                    <div className="my-2">
                        <BottonsCreate text={"Crear especialidad"} data={{name:specialty}} api={"http://127.0.0.1:8000/api/center/specialty"} />
                    </div>

                </form>
    )
}