import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Button2() {
  const navigate = useNavigate();

  return (
    <button
      className="text-xl text-[#347FC4] border-2 border-[#347FC4] bg-transparent  py-1 rounded-md flex items-center gap-1 justify-center my-2 cursor-pointer transition-colors duration-300 hover:border-transparent hover:bg-[#347FC4] hover:text-white"
      onClick={()=>{navigate("/signup")}}
    >
      Cadastro <IoArrowForward className="mt-1 " />
    </button>
  );
}

export default Button2;
