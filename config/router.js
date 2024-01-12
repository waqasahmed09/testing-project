import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from '../App'
import About from '../AboutUs/index'
import Contact from '../ContactUs/index'
import Dashboard from "./Dashboard"
import Header from  "../Header/index"
import Detail from "../AboutUs/Detail/Detail"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/aboutUs",
        element: <About />,
    },    {
        path: "/contactUs",
        element: <Contact />,
    },
    {
        path: "/header",
        element: <Header />,
    },
    {
        path: "ad-detail/:adId",
        element: <Detail />,
    },
]);

function Router() {

    return    <RouterProvider router={router} />

}
export default Router  
