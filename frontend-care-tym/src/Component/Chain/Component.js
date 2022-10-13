import BottonsGo from "../../Component/Bottons/BottonsGo";

export default function Component(props) {
    
    return (
        <div className="flex justify-center">
            <div className="my-2 pb-1 border-b border-black flex flex-row justify-between w-5/6 md:max-w-2xl lg:max-w-4xl">
                <h1 className="">{props.name}</h1>
                <BottonsGo redirect={"/chain/edit/"+props.id+"/"+props.name} text={"Editar"}/>
            </div>
        </div>

    )
}