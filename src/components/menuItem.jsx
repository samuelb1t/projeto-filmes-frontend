import { useNavigate } from "react-router-dom";

function MenuItem({text,link}){
  const navigate = useNavigate();
  return(
    <li className="text-2xl w-full text-white cursor-pointer relative after:content-[''] after:bg-slate-200 after:h-0.5 after:absolute after:-bottom-1  after:left-0 after:w-0 hover:after:w-full" onClick={()=>{navigate({link})}}>{text}</li>
  )
}

export default MenuItem;
