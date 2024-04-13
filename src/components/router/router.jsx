import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Service from "../Page/Service/Service";
import Login from "../LeyOut/Login/Login";
import Registration from "../LeyOut/Registration/Registration";
import Update from "../Page/Update/Update";
import AddCoffee from "../Page/AddCoffee/AddCoffee";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: '/update',
                element: <Update />
            },
            {
                path: "/addcoffee",
                element: <AddCoffee />
            }


        ]
    }
])

export default router;