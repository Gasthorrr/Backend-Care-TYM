import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteRequest, getRequest } from "../../../Services/Request"
import Swal from 'sweetalert2'

export default function ListEditMedic(props) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const api = props.api


    useEffect(() => {
        const getData = async () => {
            setData(await getRequest(api))
        }
        getData()
        setLoading(false)
    }, [api])

    const handleEdit = (x) => {
        props.setEdit(x)
        props.setType(2)
    }

    const handleDelete = async (data, x) => {
        
        const deleteAccion = await Swal.fire({
            title: "Accion permanente",
            text: "Eliminar medico con rut: " + x.rut,
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#1D4ED8",
            confirmButtonText: "Eliminar medico",
            confirmButtonColor: "#D33"
        })
        if (deleteAccion.isConfirmed) {
            const resp = await deleteRequest("http://127.0.0.1:8000/api/center/medic/" + x.rut)
            if (resp.status === 200){
                Swal.fire({
                    title: "Medico con rut: " + x.rut + " eliminado con exito!",
                    icon: "success"
                })
            }else{
                Swal.fire({
                    title: "Error desconocido, se recomienda actualizar la pagina.",
                    icon: "error",
                })
            }
        } else {
            Swal.fire({
                title: "Accion cancelada",
                icon: "error",
                confirmButtonColor: "#1D4ED8"
            })
        }


        //if (resp.status === 200){
        //window.location.reload()
        //const deleteData = data.filter(data => data.rut !== x.rut)
        //console.log(deleteData)
        //setData(deleteData)

    }



    return (
        <div className="sm:w-96 my-5 sm:mx-4 py-5 px-2 bg-gray-200 rounded-xl shadow-xl divide-y divide-slate-300">
            <h1 className="text-center text-lg font-semibold mb-5">{props.title}</h1>
            {
                loading ? (
                    null
                ) : (
                    data.map((x) => (
                        <div key={x.rut} className="m-2">
                            <h1 className="font-medium text-lg">{x.nombre_completo}</h1>
                            <h1 className="font-normal">RUT: {x.rut}</h1>
                            <h1 className="font-normal">Correo: {x.correo}</h1>
                            <h1 className="font-normal">Telefono: {x.telefono}</h1>
                            <h1 className="font-normal">Duracion de atencion: {x.duracion_atencion}</h1>
                            <div>
                                <button className="m-2 p-1 ml-0 text-white border-2 border-blue-700 bg-blue-700 rounded-md font-medium" onClick={() => handleEdit(x)} >Editar</button>
                                <button className="m-2 border-2 border-red-600 text-red-600 rounded-md p-1 font-medium" onClick={() => handleDelete(data, x)}>Eliminar</button>
                            </div>
                        </div>
                    ))
                )

            }
        </div>
    )
}