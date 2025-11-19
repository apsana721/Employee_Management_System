// ! Routes configuration file

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import AddUser from "../Pages/AddUser";
import EditUserDetails from "../Pages/EditUserDetails";
import ViewUserDetails from "../Pages/ViewUserDetails";
import ForgotPassword from "../auth/ForgotPassword";
import ProtectedRoutes from "../context/ProtectedRoutes";
import PublicRoutes from "../context/PublicRoutes";

let myRoutes=createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<Home/>,
                },
                {
                    path:"/auth/login",
                    element:<PublicRoutes>
                        <Login/>
                    </PublicRoutes>,
                },
                {
                    path:"/auth/register",
                    element:<PublicRoutes>
                        <Register/>
                    </PublicRoutes>,
                },
                {
                    path:"/add-user",
                    element:<ProtectedRoutes>
                        <AddUser/>
                    </ProtectedRoutes>
                },
                {
                    path:"/edit-user",
                    element:<ProtectedRoutes>
                        <EditUserDetails/>
                    </ProtectedRoutes>
                },
                {
                    path:"/view-user",
                    element:<ProtectedRoutes>
                        <ViewUserDetails/>
                    </ProtectedRoutes>
                },
                {
                    path:"/auth/forgot-password",
                    element:<PublicRoutes>
                        <ForgotPassword/>
                    </PublicRoutes>,
                },
                {
                    path:"*",
                    element:<h1>404! Page Not Found</h1>
                }
            ]
        }
    ]
)
export default myRoutes;