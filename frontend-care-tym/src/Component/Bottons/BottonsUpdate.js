import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { updateRequest } from "../../Services/Request"

export default function BottonsUpdate(props) {

    const history = useNavigate()

    const [loadingSave, setLoadingSave] = useState(false)

    const handleSubmit = async (x) => {
        x.preventDefault()
        setLoadingSave(!loadingSave)
        
        const resp = await updateRequest(props.api, JSON.stringify(props.data))
        setLoadingSave(false)
        resp.status === 200 ? history(-1) : document.getElementById("error").innerHTML = props.error
    }

    return (
        <button onClick={handleSubmit} className="p-2 my-2 mr-2 bg-green-400 rounded-lg shadow-lg font-semibold text-lg hover:shadow-sm">
            {
                loadingSave ?
                    <div className="flex flex-row text-center justify-center ">
                        <div>{props.load}</div>
                    </div> :
                    <div>
                        {props.text}
                    </div>
            }
        </button>
    )
}