import Logo from "../assets/icons/logo-white.svg";
import Location from "../assets/icons/location.svg";
import Phone from "../assets/icons/phone.svg";
import Alarm from "../assets/icons/alarm.svg";
import Vk from "../assets/icons/vk_ico.svg";
import Cats from "../assets/images/cats.png";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-[45px] mt-[220px] bg-theme-blue relative after:bg-[url(assets/images/footer-wave.png)] after:bg-cover after:w-screen after:h-[130px] after:absolute after:top-[-100px]">
      <img className="absolute bottom-[260px] right-0" src={Cats} />
      <div className="flex justify-between items-center text-2xl max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <NavLink
          to="/"
          className="flex items-center gap-2 duration-200 hover:translate-y-1"
        >
          <img src={Logo} alt="logo" />
          <span className="text-4xl text-white font-title">Молли</span>
        </NavLink>
        <ul className="flex flex-col gap-[5px]">
          <h5 className="font-title text-2xl text-white">О Клинике</h5>
          <li className="flex gap-[10px] font-text text-[16px] text-white">
            <img src={Location} />
            <span>ул. Кораблестроителей, д.16/3</span>
          </li>
          <li className="flex gap-[10px] font-text text-[16px] text-white">
            <img src={Phone} />
            <span>+7(812) 456-25-07</span>
          </li>
          <li className="flex gap-[10px] font-text text-[16px] text-white">
            <img src={Alarm} />
            <span>9:00 - 22:00</span>
          </li>
        </ul>
        <ul className="flex flex-col gap-[5px]">
          <h5 className="font-title text-2xl text-white">Быстрые ссылки</h5>
          <NavLink
            to="appointment"
            className="flex gap-[10px] font-text text-[16px] text-white duration-200 hover:text-black"
          >
            Запись на прием
          </NavLink>
          <NavLink
            to="services"
            className="flex gap-[10px] font-text text-[16px] text-white duration-200 hover:text-black"
          >
            Услуги
          </NavLink>
          <NavLink
            to="catalog"
            className="flex gap-[10px] font-text text-[16px] text-white duration-200 hover:text-black"
          >
            Ветаптека
          </NavLink>
        </ul>
        <a href="https://vk.com" target="_blank" rel="noreferrer">
          <img src={Vk} alt="vk-ico" />
        </a>
      </div>
    </footer>
  );
};
