import Bg from "../components/bg";
import Label from "../components/label";
import Input from "../components/input";
import Button1 from "../components/button1";
import Button2 from "../components/button2";

function Login() {
  return (
    <Bg>
      <section className="bg-[#272838] flex flex-col gap-2 min-w-96 px-[20px] py-[40px] rounded-xl">
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
      </section>
    </Bg>
  );
}

export default Login;
