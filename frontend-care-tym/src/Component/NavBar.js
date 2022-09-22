import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthProvider } from "../Auth/AuthProvider"

export default function NavBar() {

    const user = useContext(AuthProvider)


    const history = useNavigate()

    return (
        <nav className="bg-blue-500 shadow-lg rounded-b-lg h-14 flex justify-center">
            <div className="grid grid-cols-2 w-5/6 md:max-w-2xl lg:max-w-4xl">
                <div className="self-center grid justify-items-start md:ml-0 ">
                    <button onClick={() => history("/")} className="font-bold text-2xl text-white">CareTYM</button>
                </div>

                {
                    //Logica logout 
                    user === true ? (
                        <div className=" self-center justify-end flex flex-row md:mr-0">
                            <button className="bg-red-600 p-1 rounded-lg shadow-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                            </button>
                        </div>
                    ) :
                        (
                            null
                        )
                }
            </div>






        </nav>
    )
}