import {

    useLocation,
    useRoutes,
} from "react-router-dom";
import Login from "../Auth/Login";
import HomePage from "../Components/HomePage";
import { AnimatePresence } from "framer-motion";
import React from 'react'
import PrivateRoute from "../Components/PrivateRoute";
import ModifyPage from "../Components/ModifyPage";
import AddBook from "../Components/AddBook";
import BookDetailPage from "../Components/BookDetailPage";
import About from "../Components/About";

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
                path: "/book-detail/:id",
                element: <BookDetailPage />,
            },
            {
                path: "/about",
                element: <About />,
            },

            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/dashboard',
                        element: <ModifyPage />,
                    },
                    {
                        path: '/add-book',
                        element: <AddBook />,
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




