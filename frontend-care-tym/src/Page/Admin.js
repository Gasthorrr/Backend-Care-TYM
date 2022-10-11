import {Navigate, Outlet } from "react-router-dom"

export default function Admin() {

    //const {user}  = useContext(AuthProvider)

    if(!sessionStorage.getItem("auth-token") || sessionStorage.getItem("rol") !== "administrador") return <Navigate to="/"/>    

    return (
        <div className="flex justify-center flex-col">
            <Outlet />
        </div>
    )
}