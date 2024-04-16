import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import bg from "../../../assets/images/more/header-banner.jpg"
const Header = () => {
    const links = <>
        <li><NavLink className=" text-xl font-medium" to="/">Home</NavLink></li>
        <li><NavLink className=" text-xl font-medium" to='/service'>Service</NavLink></li>
        <li><NavLink className=" text-xl font-medium" to='/addcoffee'>Add Coffee</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100" style={{backgroundImage: `url(${bg})`}}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-[#FFFFFF] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                    <img className=" w-60" src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-[#FFFFFF] gap-4 px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end text-[#FFFFFF]">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;