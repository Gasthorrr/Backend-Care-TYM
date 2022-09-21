import { Routes, Route } from "react-router-dom"
import Footer from "./Component/Footer";
import Activation from "./Page/Activation";
import Create from "./Page/AdminAPP/Create";
import Edit from "./Page/AdminAPP/Edit";
import Home from "./Page/AdminAPP/Home";
import Login from "./Page/Login";

export default function App() {
    return (
        <div>
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/activation" element={<Activation />} />

                    <Route path="/admin/home" element={<Home/>}/>
                    <Route path="/admin/create" element={<Create/>}/>
                    <Route path="/admin/edit/:key" element={<Edit/>}/>

                    <Route path="/recovery" element={<Login />} />

                </Routes>
            </div>

            <Footer />
        </div>

    )
}
