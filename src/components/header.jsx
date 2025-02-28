import { Squeeze as Hamburger } from "hamburger-react";
import logo from "../assets/Logo.svg";
import MenuHam from "./menuHam";

function Header() {
  return (
    <div className="flex w-screen bg-[#272838] justify-between items-center px-[160px] py-[8px] mb-8">
      <img src={logo} alt="" className="w-16 h-16"/>
      <MenuHam></MenuHam>
    </div>
  );
}

export default Header;
