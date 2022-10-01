import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postRequest } from "../../Services/Request"

export default function Create() {

    const history = useNavigate()

    const [name, setName] = useState()
    const [password, setPassword] = useState() 

    const handleSubmit = async(x) => {
        x.preventDefault()
        const data = {
            nombre:name,
            contraseña:password
        }
        const resp = await postRequest("http://127.0.0.1:8000/api/user/center",JSON.stringify(data))
        resp.status() === 201 ? history(-1) : document.getElementById("error").innerHTML = "Problemas al registrar red"
    }

    return (
        <div className="flex justify-center flex-col">

            <div className="flex justify-center">
                <div className="mt-10 mb-4 w-5/6 flex md:max-w-2xl lg:max-w-4xl">
                    <button onClick={() => history(-1)}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>

                    <h1 className="ml-4 text-xl font-medium align-top">Crear red centro médico</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="my-10 w-5/6 grid md:w-1/2 md:max-w-lg">
                    <form onSubmit={handleSubmit} className="grid gap-6 m-3">
                        <div>
                            <label className="my-2 block font-medium">Nombre</label>
                            <input onChange={(x)=> setName(x.target.value)} type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div>
                            <label className="my-2 block font-medium">Contraseña provisoria</label>
                            <input onChange={(x)=> setPassword(x.target.value)} type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>  
                        <div id="error"></div>                  
                        <button type="submit" className="p-3 my-2 bg-green-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm">Registrar </button>
                    </form>
                </div>
            </div>

        </div>
    )
}