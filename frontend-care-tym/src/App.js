import { Routes, Route } from "react-router-dom"
import Footer from "./Component/Footer";
import Activation from "./Page/Activation";
import Create from "./Views/AdminAPP/Create";
import Edit from "./Views/AdminAPP/Edit";
import Home from "./Page/AdminAPP/Home";
import Login from "./Page/Login";
import ListCenter from "./Views/AdminAPP/ListCenter";
import { AuthProvider } from "./Auth/AuthProvider";

export default function App() {
    return (
        <div>
            <div className="min-h-screen">
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/activation" element={<Activation />} />

                        <Route path="/admin" element={<Home />}>
                            <Route index element={<ListCenter />} />
                            <Route path="create" element={<Create />} />
                            <Route path="edit/:id/:name" element={<Edit />} />
                        </Route>


                        <Route path="/recovery" element={<Login />} />

                    </Routes>
                </AuthProvider>

            </div>

            <Footer />
        </div>

    )
}
