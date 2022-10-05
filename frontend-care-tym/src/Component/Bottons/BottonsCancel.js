import { useNavigate } from "react-router-dom"
export default function BottonsCancel(props){

    const history = useNavigate()

    return(
        <button className="p-3 my-2 ml-2 bg-red-500 rounded-lg shadow-lg font-semibold text-xl hover:shadow-sm" onClick={() => history(props.redirect)}>
            {props.text}
        </button>
    )
}