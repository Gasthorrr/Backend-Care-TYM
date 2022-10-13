import Component from "../../Component/Chain/Component";
import { useEffect, useState } from "react";
import { getRequest } from "../../Services/Request";
import BottonsGo from "../../Component/Bottons/BottonsGo";

export default function ListChain(props) {

    const [center, setCenter] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(props.type)

    useEffect(() => {

        const request = async () => {
            setCenter(await getRequest("http://127.0.0.1:8000/api/"+props.type))
        }

        request()
        setLoading(false)
    }, [])


    return (
        <>
            <div className="flex justify-center">
                <div className="my-10 w-5/6 flex justify-between md:max-w-2xl lg:max-w-4xl">
                    <div className="self-center">
                        <h1 className="font-semibold text-xl">Centros de salud</h1>
                    </div>
                    <div className="self-center">
                        <BottonsGo redirect={"create/"} text={"Añadir"}/>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="col-span-3 flex flex-col w-full md:w-5/6 md:max-w-2xl lg:max-w-4xl">
                    {
                        loading ?
                            null:
                            center.map((x) => (
                                <Component key={x.id} name={x.nombre} id={x.id} />
                            ))
                    }
                </div>
            </div>

        </>

    )
}