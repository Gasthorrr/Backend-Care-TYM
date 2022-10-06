import { Routes, Route } from "react-router-dom"
import Footer from "./Component/Footer";
import Activation from "./Page/Activation";
import Create from "./Views/AdminAPP/Create";
import Edit from "./Views/AdminAPP/Edit";
import Admin from "./Page/Admin";
import Login from "./Page/Login";
import ListCenter from "./Views/ListCenter";
import { AuthProvider } from "./Auth/AuthProvider";
import Chain from "./Page/Chain";

export default function App() {
    return (
        <div>
            <div className="min-h-screen">
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/activation" element={<Activation />} />

                        <Route path="/admin" element={<Admin />}>
                            <Route index element={<ListCenter  type={"chain"} text={"Redes de cadenas de salud"} />} />
                            <Route path="create" element={<Create />} />
                            <Route path="edit/:id/:name" element={<Edit />} />
                        </Route>

                        <Route path="/chain" element={<Chain/>}>
                            <Route index element={<ListCenter type={"center"} text={"Redes de centro de salud"}/>} />

                        </Route>


                        <Route path="/recovery" element={<Login />} />

                    </Routes>
                </AuthProvider>

            </div>

            <Footer />
        </div>

    )
}
