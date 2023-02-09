import PetOwner from "../assets/images/worktime.png";
import Clock from "../assets/icons/clock.svg";
import Bone from "../assets/images/phone.png";

export const WorkTimeSection = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-5">
        <div className="flex-col mt-40">
          <div className="flex items-center gap-3.5 mb-8">
            <img className="block" src={Clock} />
            <h3 className="font-title text-4xl">Время работы</h3>
          </div>
          <p className="font-text text-2xl w-[400px] text-justify mb-20">
            Мы работаем ежедневно{" "}
            <span className="text-theme-blue">с 9:00 до 22:00</span>, без
            перерыва на обед.
          </p>
          <img
            className="block cursor-pointer hover:origin-center hover:rotate-12 duration-200"
            src={Bone}
            alt="phone"
          />
        </div>
        <img
          className="absolute right-0 top-[480px]"
          src={PetOwner}
          alt="pet_owner"
        />
      </div>
    </div>
  );
};
