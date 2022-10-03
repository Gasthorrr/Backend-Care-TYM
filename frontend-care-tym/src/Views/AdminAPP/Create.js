import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postRequest } from "../../Services/Request"

export default function Create() {

    const history = useNavigate()

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (x) => {
        x.preventDefault()
        setLoading(!loading)
        const data = {
            nombre: name,
            contraseña: password
        }
        const resp = await postRequest("http://127.0.0.1:8000/api/user/chain", JSON.stringify(data))
        setLoading(false)

        resp === 200 ? history(-1) : document.getElementById("error").innerHTML = "Cadena de centro medico ya registrada"
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
                            <input onChange={(x) => setName(x.target.value)} type="txet" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div>
                            <label className="my-2 block font-medium">Contraseña provisoria</label>
                            <input onChange={(x) => setPassword(x.target.value)} type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div id="error" className="text-red-500 text-center"></div>
                        <button type="submit" className="p-3 my-2 bg-green-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm">
                            {
                                loading ?
                                    <div className="flex flex-row text-center justify-center ">
                                        <svg role="status" className="inline mr-3 my-auto w-5 h-5 text-black animate-spin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                        <div>Registrando</div>
                                    </div> :
                                    <div>
                                        Registrar
                                    </div>
                            }
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}