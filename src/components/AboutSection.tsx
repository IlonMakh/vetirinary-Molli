import Dog from "../assets/icons/dog.svg";
import Vet from "../assets/icons/vet.svg";
import Cart from "../assets/icons/cart.svg";
import Arrow from "../assets/icons/arrow.svg";
import Shop from "../assets/images/shop.jpg";
import Clinic from "../assets/images/clinic.jpg";
import { NavLink } from "react-router-dom";

interface aboutCard {
  title: string;
  img: string;
}

const aboutCards: aboutCard[] = [
  {
    title: "Клиника",
    img: Vet,
  },
  {
    title: "Ветаптека",
    img: Cart,
  },
];

export const AboutSection = () => {
  return (
    <div id="about" className="mt-[120px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="flex gap-[20px] justify-center mb-[50px]">
          <h3 className="font-title text-4xl">О нас</h3>
          <img src={Dog} />
        </div>
        <p className="font-text text-2xl text-justify mb-[50px]">
          Наша клиника оказывает ветеринарную помощь всем видам домашних
          животных с 1996 года. Мы осуществляем предварительную диагностику,
          терапию и процедуры, хирургические операции. При клинике работает
          ветеринарная аптека и магазин зоотоваров.
        </p>
        <div className="flex items-center justify-center gap-[70px] mb-[20px]">
          {aboutCards.map((card) => {
            return (
              <div
                key={card.title}
                className="w-[320px] h-[290px]  bg-transparent cursor-pointer group perspective"
              >
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      className="w-full h-full"
                      src={card.title === "Клиника" ? Clinic : Shop}
                      alt={card.title === "Клиника" ? "clinic" : "shop"}
                    />
                  </div>

                  <div
                    className={
                      card.title === "Клиника"
                        ? "absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden flex flex-col justify-between bg-theme-blue p-[40px] after:w-[350px] after:h-[350px] after:rounded-full after:bg-white/[.2] after:absolute after:top-[-170px] after:left-[-20px] cursor-pointer"
                        : "absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden flex flex-col justify-between bg-theme-yellow p-[40px] after:w-[350px] after:h-[350px] after:rounded-full after:bg-white/[.4] after:absolute after:top-[-170px] after:left-[-20px] cursor-pointer"
                    }
                  >
                    <div className="flex gap-[20px] items-center z-10">
                      <img src={card.img} />
                      <h5 className="font-title text-2xl">{card.title}</h5>
                    </div>
                    <NavLink
                      to={card.title === "Клиника" ? "services" : "catalog"}
                      className="flex gap-[15px] items-center hover:translate-x-10 duration-1000"
                    >
                      <img src={Arrow} />
                      <div className="font-text uppercase text-xl">
                        Узнать больше
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
