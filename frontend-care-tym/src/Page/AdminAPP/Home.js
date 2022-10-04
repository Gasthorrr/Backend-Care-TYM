import {Navigate, Outlet } from "react-router-dom"
import NavBar from "../../Component/NavBar";
import  AuthProvider  from "../../Auth/AuthProvider";
import { useContext } from "react";

export default function Home() {

    //const {user}  = useContext(AuthProvider)

    if(!sessionStorage.getItem("auth-token")) return <Navigate to="/"/>    

    return (
        <div className="flex justify-center flex-col">
            <NavBar />
            <Outlet />
        </div>
    )
}