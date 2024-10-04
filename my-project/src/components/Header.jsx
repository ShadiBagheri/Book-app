import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
    return(
        <header className="container flex justify-between items-center w-3/5 mx-auto mb-10 px-5 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-black  cursor-pointer">Book app</h1>
            <img className="w-24 h-20  cursor-pointer" src={logo} alt="logo"/>
        </header>
    )
}

export default Header;