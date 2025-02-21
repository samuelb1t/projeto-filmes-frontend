import Bg from "./bg";
import logo from "../assets/rateMovies.svg";

function LoginBase({ children }) {
  return (
    <Bg>
      <img src={logo} alt="Logo" className="w-56" />
      <section className="bg-[#272838] flex flex-col gap-2 min-w-96 px-[20px] py-[40px] rounded-xl">
        {children}
      </section>
    </Bg>
  );
}

export default LoginBase;
