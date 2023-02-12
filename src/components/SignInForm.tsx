import Puppy from "../assets/images/signImg.png";
import { NavLink } from "react-router-dom";

export const SignInForm = () => {
  return (
    <div className="mx-auto flex flex-row w-[850px] h-[550px] rounded-[10px] shadow-[4px_4px_56px_20px_rgba(85,130,248,0.5)] gap-[40px] bg-white">
      <img src={Puppy} alt="puppy image" />
      <form className="flex flex-col justify-center items-center">
        <h3 className="font-title text-[28px] mb-[25px]">Авторизация</h3>
        <input
          className="w-[390px] h-[40px] font-title text-[20px] mb-[20px] px-[30px] rounded-full bg-theme-grey outline-none placeholder:text-[#4C4D4F]"
          type="text"
          placeholder="E-mail"
        />
        <input
          className="w-[390px] h-[40px] font-title text-[20px] mb-[30px] px-[30px] rounded-full bg-theme-grey outline-none placeholder:text-[#4C4D4F]"
          type="text"
          placeholder="Пароль"
        />
        <button className="w-[390px] h-[40px] font-title text-[20px] text-white mb-[30px] text-center rounded-full bg-theme-blue">
          Войти
        </button>
        <p className="font-text text-[16px] text-[#4C4D4F]">
          Нет аккаунта?{" "}
          <NavLink className="text-theme-blue" to="/signUp">
            Зарегистрируйтесь
          </NavLink>
        </p>
      </form>
    </div>
  );
};
