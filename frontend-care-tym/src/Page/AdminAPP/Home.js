import {Navigate, Outlet } from "react-router-dom"
import NavBar from "../../Component/NavBar";
import { AuthProvider } from "../../Auth/AuthProvider";
import { useContext } from "react";

export default function Home() {

    const user  = useContext(AuthProvider)

    if(!user) return <Navigate to="/"/>    

    return (
        <div className="flex justify-center flex-col">
            <NavBar />
            <Outlet />
        </div>
    )
}