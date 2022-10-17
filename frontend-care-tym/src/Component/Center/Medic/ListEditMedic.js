import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteRequest, getRequest } from "../../../Services/Request"

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

    const handleEdit = (x)=>{
        props.setEdit(x) 
        props.setType(2)
    }

    const handleDelete = async(data,x) =>{
        console.log()
        const resp = await deleteRequest("http://127.0.0.1:8000/api/center/medic/"+ x.rut)
        if (resp.status === 200){
            window.location.reload()
            //const deleteData = data.filter(data => data.rut !== x.rut)
            //console.log(deleteData)
            //setData(deleteData)

        }
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
                                <button className="m-2 ml-0" onClick={()=>handleEdit(x)} >Editar</button>
                                <button className="m-2" onClick={()=> handleDelete(data,x)}>Eliminar</button>
                            </div>
                        </div>
                    ))
                )

            }
        </div>
    )
}