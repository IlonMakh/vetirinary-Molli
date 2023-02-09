import Logo from "../assets/icons/logo.png";
import User from "../assets/icons/user.svg";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="py-8 bg-white/[.5]">
      <div className="flex justify-between items-center font-title text-2xl max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <NavLink
          className="flex items-center gap-2 duration-200 hover:translate-y-1"
          to="/"
        >
          <img src={Logo} alt="logo" />
          <span
            className={
              pathname !== "/"
                ? "text-4xl text-theme-blue"
                : "text-4xl text-white"
            }
          >
            Молли
          </span>
        </NavLink>
        <nav className="flex gap-7">
          <Link className="duration-200 hover:text-theme-blue" to="/#about">
            О нас
          </Link>
          <NavLink className="duration-200 hover:text-theme-blue" to="services">
            Услуги
          </NavLink>
          <Link className="duration-200 hover:text-theme-blue" to="/#contacts">
            Контакты
          </Link>
          <NavLink className="duration-200 hover:text-theme-blue" to="catalog">
            Ветаптека
          </NavLink>
          <NavLink to="signIn">
            <img src={User} alt="user" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
