import { useEffect, useState } from "react"
import { getRequest } from "../../Services/Request"

export default function ListShort(props) {

    const [data, setData] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            setData(getRequest("http://127.0.0.1:8000/api/center/specialty"))
        }
        getData()
    },[])


    return (
        <div className="mx-2 min-w-fit my-5 sm:w-4/12 py-5 px-2 bg-slate-50 rounded-xl shadow-xl divide-y">
            <h1 className="text-center text-lg font-semibold mb-5">{props.title}</h1>
            {

            }
            <div className="m-2">
                <h1 className="font-medium">Medicina general</h1>
                <h1 className="font-light">ID 1</h1>
            </div>
            <div className="m-2">
                <h1 className="font-medium">Traumatologo</h1>
                <h1 className="font-light">ID 2</h1>
            </div>
            <div className="m-2">
                <h1 className="font-medium">Urologo</h1>
                <h1 className="font-light">ID 3</h1>
            </div>
            <div className="flex justify-end">
                <button className="bg-blue-700 text-white font-medium p-2.5 rounded-xl shadow-xl mt-4 hover:shadow-none">Ver mas</button>
            </div>

        </div>
    )
}