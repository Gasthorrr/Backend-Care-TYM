import Component from "../../Component/AdminAPP/Component";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import {getRequest} from "../../Services/Request";

export default function ListCenter() {

    const history = useNavigate()

    const [center, setCenter] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const request = async () => {
            setCenter(await getRequest("http://127.0.0.1:8000/api/user/chain"))
        }

        request()
        setLoading(false)
    },[])


    return (
        <>
            <div className="flex justify-center">
                <div className="my-10 w-5/6 flex justify-between md:max-w-2xl lg:max-w-4xl">
                    <div className="self-center">
                        <h1 className="font-semibold text-xl">Redes de centro de salud</h1>
                    </div>
                    <div className="self-center">
                        <button className="p-2 bg-green-500 rounded-lg shadow-lg font-semibold text-lg hover:shadow-sm" onClick={() => history("/admin/create")}>Añadir</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="col-span-3 flex flex-col w-full md:w-5/6 md:max-w-2xl lg:max-w-4xl">
                    {
                        loading ?
                        null : 
                        center.map((x) => (
                            <Component key={x.id} name={x.nombre} id={x.id} />
                        ))
                    }
                </div>
            </div>

        </>

    )
}