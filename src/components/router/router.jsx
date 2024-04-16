import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Service from "../Page/Service/Service";
import Login from "../LeyOut/Login/Login";
import Registration from "../LeyOut/Registration/Registration";
import Update from "../Page/Update/Update";
import AddCoffee from '../Page/AddCoffee/AddCoffee'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffee')
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
                path: "/addCoffee",
                element: <AddCoffee />
            },
            {
                path: '/update/:id',
                element: <Update />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },



        ]
    }
])

export default router;