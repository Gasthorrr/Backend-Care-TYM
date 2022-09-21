import { useNavigate } from "react-router-dom"

export default function Component(props) {

    const history = useNavigate()
    
    return (
        <div className="flex justify-center">
            <div className="my-2 pb-1 border-b border-black flex flex-row justify-between w-5/6 md:max-w-2xl lg:max-w-4xl">
                <h1 className="">{props.name}</h1>
                <button className="p-2 bg-green-500 rounded-lg shadow-lg font-semibold text-lg hover:shadow-sm" onClick={()=>history("/admin/edit/"+1111)}>Editar</button>
            </div>
        </div>

    )
}