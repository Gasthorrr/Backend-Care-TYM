import { useNavigate } from "react-router-dom"
import Component from "../../Component/AdminAPP/Component";
import NavBar from "../../Component/NavBar";

export default function Home() {

    const history = useNavigate()

    return (
        <div className="flex justify-center flex-col">
            <NavBar />
            <div className="flex justify-center">
                <div className="my-10 w-5/6 flex justify-between md:max-w-2xl lg:max-w-4xl">
                    <div className="self-center">
                        <h1 className="font-semibold text-xl">Redes de centro de salud</h1>
                    </div>
                    <div className="self-center">
                        <button className="p-2 bg-green-500 rounded-lg shadow-lg font-semibold text-lg hover:shadow-sm" onClick={()=>history("/admin/create")}>Añadir</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="col-span-3 flex flex-col w-full md:w-5/6 md:max-w-2xl lg:max-w-4xl">
                    <Component name="Rads" />
                    <Component name="Intregramedica" />
                    <Component name="Red salud" />
                    <Component name="Hospital coquimbo" />
                </div>
            </div>



        </div>
    )
}