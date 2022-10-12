import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthProvider from "../Auth/AuthProvider"

export default function NavBar() {

    const { Logout } = useContext(AuthProvider)

    const session = sessionStorage.getItem("auth-token") ? true : false // asigna booleano segun el estado del usuario (existe o no)
    const type = sessionStorage.getItem("rol")

    const history = useNavigate()

    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 m-1 rounded-2xl md:m-0 md:rounded-none mb-3">
                <div className={"container px-4 mx-auto flex flex-wrap items-center justify-between"+(type !=="centro_medico" ? " flex-nowrap" : "")}>
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <button onClick={() => history("/")} className="font-bold text-2xl text-white">
                            {session ? sessionStorage.getItem("title") : "CareTYM"}
                        </button>
                        {   //logica de boton collapse y cerrar sesion
                            type !== "centro_medico" ? (
                                   null
                                
                            ) :
                                (
                                    <button className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                                        {
                                            !navbarOpen ? (
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                            ) : (
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            )
                                        }
                                    </button>
                                )
                        }
                    </div>
                    <div className={"lg:flex flex-grow justify-center" + (navbarOpen ? " flex" : " hidden") + (type !== "centro_medico" ? "flex grow-0 flex-row" : "") } id="example-navbar-danger">
                        <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto">
                            {   // logica ref de tipos de usuarios
                                type === "centro_medico" && session ? (
                                    <>
                                        <li>
                                            <a href="/center" class="mx-4 block py-2 pr-4 pl-3 text-white rounded md:bg-transparent dark:text-white" aria-current="page">Inicio</a>
                                        </li>
                                        <li>
                                            <a href="/center/medic" class="mx-4 block py-2 pr-4 pl-3 text-white rounded md:bg-transparent dark:text-white" aria-current="page">Medicos</a>
                                        </li>
                                        <li>
                                            <a href="/center/specialty" class="mx-4 block py-2 pr-4 pl-3 text-white rounded md:bg-transparent dark:text-white" aria-current="page">Especialidades</a>
                                        </li>
                                        <li>
                                            <a href="/center/coordinator" class="mx-4 block py-2 pr-4 pl-3 text-white rounded md:bg-transparent dark:text-white" aria-current="page">Coordinadores</a>
                                        </li>
                                    </>

                                ) :
                                    (
                                        null
                                    )
                            }

                            <li>
                                {   //cerrar sesion
                                    session === true && type === "centro_medico" ? (
                                        <div className=" mx-4 self-center justify-end flex flex-row md:mr-0">
                                            <button onClick={Logout} className="bg-red-600 p-1 rounded-lg shadow-lg">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                            </button>
                                        </div>
                                    ) :
                                        (
                                            null
                                        )
                                }
                            </li>
                        </ul>
                        {   //cerrar sesion
                            session === true && type !== "centro_medico" ? (
                                <div className=" mx-4 self-center justify-end flex flex-row md:mr-0">
                                    <button onClick={Logout} className="bg-red-600 p-1 rounded-lg shadow-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    </button>
                                </div>
                            ) :
                                (
                                    null
                                )
                        }
                    </div>
                    
                </div>
            </nav>
        </>
    )

}