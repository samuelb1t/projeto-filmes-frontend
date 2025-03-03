import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";
import MenuItem from "./menuItem";

function MenuHam() {
  const [open, isOpen] = useState(false);

  return (
    <div className="relative">
      <div className="relative z-2">
        <Hamburger
          rounded
          color="white"
          size={36}
          toggle={isOpen}
          toggled={open}
        ></Hamburger>
      </div>
      <div
        style={{ display: open ? "block" : "none" }}
        className="absolute bg-[#5D536B] border-3 border-black border-solid rounded-lg top-0 right-0 px-6 pt-12 pb-4 z-1"
      >
        <ul className="flex flex-col items-center gap-2 mx-6">
          <MenuItem text={"Início"} link={"/home"}></MenuItem>
          <MenuItem text={"Conta"} link={"/profile"}></MenuItem>
          <MenuItem text={"Sair"}></MenuItem>
        </ul>
      </div>
    </div>
  );
}

export default MenuHam;
