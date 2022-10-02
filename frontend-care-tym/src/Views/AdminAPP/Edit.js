import { useState } from "react"
import { deleteRequest, postRequest, updateRequest } from "../../Services/Request"
import { useNavigate, useParams } from "react-router-dom"

export default function Edit(props) {

    const history = useNavigate()

    const {name} = useParams()

    const [nameChain, setNameChain] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async(x) => {
        x.preventDefault()
        const data = {
            nombre:nameChain,
            contraseña:password
        }
        const resp = await updateRequest("http://127.0.0.1:8000/api/user/chain/"+name,JSON.stringify(data))
        resp.status === 200 ? history(-1) : document.getElementById("error").innerHTML = "Problemas al acualizar red"
    }
    const deleteCenter = async(x) => {
        x.preventDefault()
        const resp = await deleteRequest("http://127.0.0.1:8000/api/user/chain/"+name)
        resp.status === 200 ? history(-1) : document.getElementById("error").innerHTML = "Problemas al eliminar red"
    }



    return (
        <div className="flex justify-center flex-col">

            <div className="flex justify-center">
                <div className="mt-10 mb-4 w-5/6 flex md:max-w-2xl lg:max-w-4xl">
                    <h1 className="ml-4 text-xl font-medium align-top">Editar centro médico</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="my-10 w-5/6 grid md:w-1/2 md:max-w-lg">
                    <form onSubmit={handleSubmit} className="grid gap-6 m-3">
                        <div>
                            <label className="my-2 block font-medium">Nombre</label>
                            <input onChange={(x)=> setNameChain(x.target.value)} type="text" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div>
                            <label className="my-2 block font-medium">Contraseña</label>
                            <input onChange={(x)=> setPassword(x.target.value)} type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>

                        
                        <div className="grid grid-cols-2">
                            <button type="submit" className="p-3 my-2 mr-2 bg-green-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm">Guardar</button>
                            <button className="p-3 my-2 ml-2 bg-red-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm" onClick={() => history("/admin")}>Cancelar</button>
                        </div>
                        <button onClick={deleteCenter} className="p-3 bg-white text-red-500 border-2 border-red-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm">Eliminar centro</button>

                    </form>
                </div>
            </div>

        </div>
    )
}