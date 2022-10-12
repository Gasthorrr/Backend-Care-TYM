import { Routes, Route } from "react-router-dom"
import Footer from "./Component/Footer";
import Activation from "./Page/Activation";
import Create from "./Views/AdminAPP/Create";
import Edit from "./Views/AdminAPP/Edit";
import Admin from "./Page/Admin";
import Login from "./Page/Login";
import ListChain from "./Views/AdminAPP/ListChain";
import ListCenter from "./Views/Chain/ListCenter"
import { AuthProvider } from "./Auth/AuthProvider";
import Chain from "./Page/Chain";
import EditCenter from "./Views/Chain/EditCenter";
import CreateCenter from "./Views/Chain/CreateCenter";
import NavBar from "./Component/NavBar";
import Center from "./Page/Center";
import HomeCenter from "./Views/Center/HomeCenter";

export default function App() {
    return (
        <div>
            <div className="min-h-screen">
                <AuthProvider>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/activation" element={<Activation />} />

                        <Route path="/admin" element={<Admin />}>
                            <Route index element={<ListChain  type={"admin/chain"} text={"Redes de cadenas de salud"} />} />
                            <Route path="/admin/chain/create" element={<Create />} />
                            <Route path="/admin/chain/edit/:id" element={<Edit />} />
                        </Route>

                        <Route path="/chain" element={<Chain/>}>
                            <Route index element={<ListCenter type={"chain/center"} text={"Centros de salud"}/>} />
                            <Route path="/chain/center/edit/:id/:name" element={<EditCenter />}/>
                            <Route path="/chain/center/create/:id" element={<CreateCenter />}/>
                        </Route>

                        <Route path="/center" element={<Center/>}>
                            <Route index element={<HomeCenter/>} />
                            

                        </Route>


                        <Route path="/recovery" element={<Login />} />

                    </Routes>
                </AuthProvider>

            </div>

            <Footer />
        </div>

    )
}
