import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import MainLayout from "../Components/Layouts/MainLayout";
import Apps from "../Components/Apps/Apps";
import Installation from "../Components/Installation/Installation";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout></MainLayout> ,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    index:true,
                    element: <Home></Home>
                },
                {
                    path: '/apps',
                    element: <Apps></Apps>
                },
                {
                    path: '/installation',
                    element: <Installation></Installation>
                },


            ]
        },
    ]
)


export default router