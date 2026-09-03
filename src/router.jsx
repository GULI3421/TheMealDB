import { createBrowserRouter  } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Ingrient from "./pages/Ingrient";
import Search from "./pages/Search";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/detail/:id",
                element:<Detail/>
            },
            {
                path:"/ingridient/:item",
                element:<Ingrient/>
            },
            {
                path:"/search/:text",
                element:<Search/>
            }
        ]
    }
])