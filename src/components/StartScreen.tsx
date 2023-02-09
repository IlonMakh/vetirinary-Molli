import { Header } from "./Header";
import Bone from "../assets/images/appointment.png";
import { NavLink } from "react-router-dom";

export const StartScreen = () => {
  return (
    <div className="overflow-hidden bg-[url(assets/images/start-screen.png)] bg-cover bg-no-repeat bg-center h-[600px] relative after:bg-[url(assets/images/start-wave.svg)] after:w-screen after:h-[186px] after:absolute after:bottom-[-60px]">
      <Header />
      <NavLink to="appointment">
        <img
          className="block mt-10 cursor-pointer hover:origin-center hover:rotate-12 duration-200 "
          src={Bone}
          alt="make_appointment"
        />
      </NavLink>
    </div>
  );
};
