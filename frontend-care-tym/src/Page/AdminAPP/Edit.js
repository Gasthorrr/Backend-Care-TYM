import { useNavigate } from "react-router-dom"
import NavBar from "../../Component/NavBar";

export default function Edit() {

    const history = useNavigate()

    return (
        <div className="flex justify-center flex-col">
            <NavBar />

            <div className="flex justify-center">
                <div className="mt-10 mb-4 w-5/6 flex md:max-w-2xl lg:max-w-4xl">
                    <h1 className="ml-4 text-xl font-medium align-top">Editar centro médico</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="my-10 w-5/6 grid md:w-1/2 md:max-w-lg">
                    <form className="grid gap-6 m-3">
                        <div>
                            <label className="my-2 block font-medium">Nombre</label>
                            <input type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div>
                            <label className="my-2 block font-medium">Ciudad</label>
                            <input type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div>
                            <label className="my-2 block font-medium">Dirección</label>
                            <input type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div>
                            <label className="my-2 block font-medium">Correo electrónico</label>
                            <input type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div className="grid grid-cols-2">
                            <button className="p-3 my-2 mr-2 bg-green-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm">Enviar cambios</button>
                            <button className="p-3 my-2 ml-2 bg-red-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm" onClick={() => history(-1)}>Cancelar</button>
                        </div>
                        <button className="p-3 bg-white text-red-500 border-2 border-red-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm">Eliminar centro</button>

                    </form>
                </div>
            </div>

        </div>
    )
}