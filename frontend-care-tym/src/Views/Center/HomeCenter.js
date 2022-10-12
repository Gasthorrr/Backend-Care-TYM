import ListShort from "../../Component/Center/ListShort";

export default function HomeCenter() {
    return (
        <div className="flex justify-center mt-6">
            <div className="flex flex-col justify-center flex-wrap rounded-xl shadow-xl w-11/12  bg-slate-300 py-2">
                <h1 className="text-center text-2xl font-semibold mt-2">Resumen centro medico</h1>
                <div className="flex flex-col sm:flex-row flex-nowrap my-5">

                    <ListShort title={"Especialidades globales"}/>

                    <div className="mx-2 w-2/6 py-5 bg-slate-50 rounded-xl shadow-xl">
                        <h1 className="text-center text-lg font-semibold mb-5">Medicos</h1>


                    </div>

                    <div className="mx-2 w-2/6 py-5 bg-slate-50 rounded-xl shadow-xl">
                        <h1 className="text-center text-lg font-semibold mb-5">Coordinadores</h1>
                    </div>

                </div>

            </div>
        </div>

    )
}