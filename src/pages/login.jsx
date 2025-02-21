import Label from "../components/label";
import Input from "../components/input";
import Button1 from "../components/button1";
import Button2 from "../components/button2";
import LoginBase from "../components/loginBase";

function Login() {
  return (
    <LoginBase>
      <div className="flex flex-col">
        <Label text={"Usuário"} id={"user"}></Label>
        <Input placeholder={"Digite seu usuário"} id={"user"}></Input>
      </div>
      <div className="flex flex-col mb-6">
        <Label text={"Senha"} id={"password"}></Label>
        <Input placeholder={"Digite sua senha"} id={"password"}></Input>
      </div>
      <Button2></Button2>
      <Button1 text={"Login"}></Button1>
    </LoginBase>
  );
}

export default Login;
