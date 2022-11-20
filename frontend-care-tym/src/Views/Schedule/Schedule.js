import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getRequest } from "../../Services/Request"

export default function Schedule() {

    const data_user = JSON.parse(sessionStorage.getItem("data_patient"))

    const { id } = useParams

    const [specialty, setSpecialty] = useState([])
    const [loadingSpecialty, setLoadingSpecialty] = useState(true)

    useEffect(() => {
        const getSpecialty = async () => {
            setSpecialty(await getRequest("http://127.0.0.1:8000/api/patient/available_specialties/" + id))
            setLoadingSpecialty(false)
            console.log(specialty)
        }
        getSpecialty()

    }, [])

    return (
        <div className="flex justify-center">
            <div className="m-2 flex-col ">

                <div className="my-5 sm:mx-4 sm:w-[900px] py-5 px-2 bg-slate-50 rounded-xl shadow-lg flex flex-col justify-center">
                    <h1 className="text-center text-lg font-medium mb-5">Datos del usuario</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-4">
                        <h1 className="text-end mr-2 mb-2 font-medium">Nombre completo:</h1>
                        <h1>{data_user.full_name}</h1>
                        <h1 className="text-end mr-2 mb-2 font-medium">Rut:</h1>
                        <h1>{data_user.rut}</h1>
                        <h1 className="text-end mr-2 mb-2 font-medium">Fecha de nacimineto:</h1>
                        <h1>{data_user.date_of_birth}</h1>
                        <h1 className="text-end mr-2 mb-2 font-medium">Cobertura de salud:</h1>
                        <h1>{data_user.health_coverage}</h1>
                        <h1 className="text-end mr-2 mb-2 font-medium">Correo electronico:</h1>
                        <h1>{data_user.email}</h1>
                        <h1 className="text-end mr-2 mb-2 font-medium">Telefono:</h1>
                        <h1>{data_user.phone}</h1>
                    </div>
                    <h1 className="text-center text-sm my-2">Recuerda que cualquier inconsistenca con los datos registrados debes llamar a un centro medico de la red CareTYM</h1>
                </div>

                <div className="my-5 sm:mx-4 sm:w-[900px] p-5 bg-slate-50 rounded-xl shadow-lg flex flex-col justify-center">
                    <h1 className="text-center text-lg font-medium mb-5">Agendamiento de hora medica</h1>
                    <div>
                        <div className="rounded-full bg-blue-600 w-10 h-10 flex justify-center align-middle">
                            <h1 className="text-white font-medium text-xl">1</h1>
                        </div>
                        <h1 className="my-5">Selecciona una especialidad</h1>
                        {
                            loadingSpecialty ? (<p>Cargando...</p>) :
                                (
                                    <select>
                                        
                                    </select>
                                )
                        }
                    </div>

                </div>
            </div >

        </div>

    )
}