import { Outlet } from "react-router-dom"
import Header from "../LeyOut/Header/Header";

const Root = () => {
    return (
        <div className=" ">
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;