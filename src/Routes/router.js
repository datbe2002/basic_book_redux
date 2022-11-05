import {

    useLocation,
    useRoutes,
} from "react-router-dom";
import Login from "../Auth/Login";
import HomePage from "../Components/HomePage";
import { AnimatePresence } from "framer-motion";
// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <div>Hello world!</div>,
//     },
//     // {
//     //     path: "/dashboard",
//     //     element: <Login />,
//     // },
// ]);

import React from 'react'
import PrivateRoute from "../Components/PrivateRoute";
import ModifyPage from "../Components/ModifyPage";

export default function Router() {
    const element = useRoutes(
        [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/dashboard",
                element: <HomePage />,
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/modify-page',
                        element: <ModifyPage />,
                    },

                ]
            },
        ]
    )
    const location = useLocation();

    if (!element) return null
    return (
        <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
    )
}




