import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";

function MenuHam() {
  const [open, isOpen] = useState(false);

  return (
    <div className="relative">
      <div className="relative z-1">
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
        className="absolute bg-[#272838] top-0 right-0 px-8 pt-10 pb-4 z-0"
      >
        <ul>
          <li className="text-xl text-white">Conta</li>
          <li className="text-xl text-white">Sair</li>
        </ul>
      </div>

      {/* {open && (
        <div className="absolute bg-amber-100 top-0 right-0 px-8 pt-10 pb-4 z-10">
          <ul>
            <li className="text-xl">Conta</li>
            <li className="text-xl">Sair</li>
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default MenuHam;
