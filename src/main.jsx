import React from 'react' // imr
import ReactDOM from 'react-dom/client' //imrd
import App from './App'
import "./global.css";
import { RouterProvider } from 'react-router-dom';
import myRoutes from './Routes/Routes';
import AuthContextApi from './context/AuthContextApi';

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <AuthContextApi>
        <RouterProvider router={myRoutes}/>
    </AuthContextApi>
    </>
)
