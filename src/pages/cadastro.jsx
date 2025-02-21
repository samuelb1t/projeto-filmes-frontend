import LoginBase from "../components/loginBase";
import Label from "../components/label";
import Input from "../components/input";
import Button1 from "../components/button1";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


function Cadastro() {
    const navigate = useNavigate();
  return (
    <LoginBase>
      <FaArrowLeftLong color="white" className="w-6 h-6 cursor-pointer" onClick={()=>{navigate("/login")}}/>
      <div className="flex flex-col">
        <Label text={"Usuário"} id={"user"}></Label>
        <Input placeholder={"Digite seu usuário"} id={"user"}></Input>
      </div>
      <div className="flex flex-col">
        <Label text={"Senha"} id={"password"}></Label>
        <Input placeholder={"Digite sua senha"} id={"password"}></Input>
      </div>
      <div className="flex flex-col mb-6">
        <Label text={"Confirmar senha"} id={"password2"}></Label>
        <Input placeholder={"Confirme sua senha"} id={"password2"}></Input>
      </div>
      <Button1 text={"Cadastrar"}></Button1>
    </LoginBase>
  );
}

export default Cadastro;
