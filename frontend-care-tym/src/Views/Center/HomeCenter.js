import ListMedicCoor from "../../Component/Center/ListMedicCoor";
import ListShort from "../../Component/Center/ListShort";

export default function HomeCenter() {
    return (
        <div className="flex justify-center mt-6">
            <div className="flex flex-col justify-center flex-wrap rounded-xl shadow-xl w-11/12  bg-slate-300 py-2">
                <h1 className="text-center text-2xl font-semibold mt-2">Resumen centro medico</h1>
                <div className="flex flex-col sm:flex-row flex-nowrap my-5">

                    <ListShort title={"Especialidades globales"} api={"http://127.0.0.1:8000/api/center/specialty"}/>

                    <ListMedicCoor title={"Medicos"} api={"http://127.0.0.1:8000/api/center/medic"}/>

                    <ListMedicCoor title={"Coordinadores"} api={"http://127.0.0.1:8000/api/center/coordinator"}/>

                </div>

            </div>
        </div>

    )
}