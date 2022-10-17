import { useEffect, useState } from "react"
import { getRequest } from "../../Services/Request"

export default function ListShort(props) {

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


    return (
        <div className="mx-2 min-w-fit my-5 sm:w-4/12 py-5 px-2 bg-gray-200 rounded-xl shadow-xl divide-y divide-slate-300">
            <h1 className="text-center text-lg font-semibold mb-5">{props.title}</h1>
            {
                loading ? (
                    null
                ) : (
                    data.map((x) => (
                        <div key={x.id} className="m-2">
                            <h1 className="font-medium">{x.nombre}</h1>
                            <h1 className="font-light">ID {x.id}</h1>
                        </div>
                    ))
                )

            }
            <div className="flex justify-end">
                <button className="bg-blue-700 text-white font-medium p-2.5 rounded-xl shadow-xl mt-4 hover:shadow-none">Ver mas</button>
            </div>

        </div>
    )
}