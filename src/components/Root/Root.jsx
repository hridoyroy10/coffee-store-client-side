import { Outlet } from "react-router-dom"
import Header from "../LeyOut/Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className=" ">
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;