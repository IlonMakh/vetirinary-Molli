import { IPet } from "../types/types";
import Chinchilla from "../assets/images/chinchilla.png";
import Cat from "../assets/images/cat.png";
import Dog from "../assets/images/dog.png";
import Turtle from "../assets/images/turtle.png";
import Rat from "../assets/images/rat.png";
import Bird from "../assets/images/bird.png";
import Rabbit from "../assets/images/rabbit.png";
import Humster from "../assets/images/humster.png";

interface IPetProps {
  pet: IPet;
}

function getPetIco(type: string) {
  switch (type) {
    case "кот":
      return Cat;
    case "собака":
      return Dog;
    case "шиншилла":
      return Chinchilla;
    case "черепаха":
      return Turtle;
    case "кролик":
      return Rabbit;
    case "грызун":
      return Rat;
    case "птица":
      return Bird;
    case "хомяк":
      return Humster;
  }
}

function getPetYear(bornYear: string) {
  const currentYear = new Date().getFullYear();
  const petYear = (currentYear - +bornYear).toString();
  if (
    +petYear.slice(petYear.length - 2) >= 11 &&
    +petYear.slice(petYear.length - 2) <= 14
  ) {
    return `${petYear} лет`;
  } else if (+petYear[petYear.length - 1] == 1) {
    return `${petYear} год`;
  } else if (
    +petYear[petYear.length - 1] >= 2 &&
    +petYear[petYear.length - 1] <= 4
  ) {
    return `${petYear} года`;
  } else if (!+petYear) {
    return `меньше 1 года`;
  } else return `${petYear} лет`;
}

export const PetCard = (props: IPetProps) => {
  return (
    <div className="flex flex-col gap-[30px] justify-center items-start w-[300px] p-[20px] bg-[#EFEEED]/[0.4] rounded-[20px] border-solid border-[2px] border-theme-blue font-text text-[18px] text-[#4C4D4F]">
      <div className="self-center relative before:w-[100px] before:h-[100px] before:bg-theme-blue/[.2] before:rounded-full before:absolute before:top-[0px] before:left-[0px]">
        <img
          className="relative"
          src={getPetIco(props.pet.type)}
          alt={props.pet.type}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-[10px]">
        <h4 className="font-title text-theme-blue text-[32px] self-center">
          {props.pet.name}
        </h4>
        <p>
          <span className="font-semibold">Вид: </span>
          {props.pet.type}
        </p>
        <p>
          <span className="font-semibold">Порода: </span>
          {props.pet.breed}
        </p>
        <p>
          <span className="font-semibold">Пол: </span>
          {props.pet.sex}
        </p>
        <p>
          <span className="font-semibold">Возраст: </span>
          {getPetYear(props.pet.bornYear)}
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-[25px]">
        <button className="relative text-black before:w-[35px] before:h-[35px] before:bg-theme-blue/[.9] before:rounded-full before:absolute before:top-[-3px] before:left-[-10px] hover:before:w-[190px] before:duration-1000 hover:text-white duration-1000">
          <span className="relative">Записать на прием</span>
        </button>
        <div className="flex flex-row justify-center items-center gap-[10px]">
          <button className="group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z"
                fill="#4C4D4F"
                className="group-hover:fill-theme-blue duration-500"
              />
              <path
                d="M19.0201 3.48004C17.0801 1.54004 15.1801 1.49004 13.1901 3.48004L11.9801 4.69004C11.8801 4.79004 11.8401 4.95004 11.8801 5.09004C12.6401 7.74004 14.7601 9.86003 17.4101 10.62C17.4501 10.63 17.4901 10.64 17.5301 10.64C17.6401 10.64 17.7401 10.6 17.8201 10.52L19.0201 9.31004C20.0101 8.33004 20.4901 7.38004 20.4901 6.42004C20.5001 5.43004 20.0201 4.47004 19.0201 3.48004Z"
                fill="#4C4D4F"
                className="group-hover:fill-theme-blue duration-500"
              />
              <path
                d="M15.6101 11.53C15.3201 11.39 15.0401 11.25 14.7701 11.09C14.5501 10.96 14.3401 10.82 14.1301 10.67C13.9601 10.56 13.7601 10.4 13.5701 10.24C13.5501 10.23 13.4801 10.17 13.4001 10.09C13.0701 9.81005 12.7001 9.45005 12.3701 9.05005C12.3401 9.03005 12.2901 8.96005 12.2201 8.87005C12.1201 8.75005 11.9501 8.55005 11.8001 8.32005C11.6801 8.17005 11.5401 7.95005 11.4101 7.73005C11.2501 7.46005 11.1101 7.19005 10.9701 6.91005C10.9489 6.86465 10.9284 6.81949 10.9085 6.77458C10.7609 6.44127 10.3263 6.34382 10.0685 6.60158L4.34007 12.33C4.21007 12.46 4.09007 12.71 4.06007 12.88L3.52007 16.71C3.42007 17.39 3.61007 18.03 4.03007 18.46C4.39007 18.81 4.89007 19 5.43007 19C5.55007 19 5.67007 18.99 5.79007 18.97L9.63007 18.43C9.81007 18.4 10.0601 18.28 10.1801 18.15L15.9014 12.4287C16.1609 12.1692 16.063 11.7237 15.7254 11.5797C15.6874 11.5634 15.649 11.5469 15.6101 11.53Z"
                fill="#4C4D4F"
                className="group-hover:fill-theme-blue duration-500"
              />
            </svg>
          </button>
          <button className="group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0699 5.23C19.4599 5.07 17.8499 4.95 16.2299 4.86V4.85L16.0099 3.55C15.8599 2.63 15.6399 1.25 13.2999 1.25H10.6799C8.34991 1.25 8.12991 2.57 7.96991 3.54L7.75991 4.82C6.82991 4.88 5.89991 4.94 4.96991 5.03L2.92991 5.23C2.50991 5.27 2.20991 5.64 2.24991 6.05C2.28991 6.46 2.64991 6.76 3.06991 6.72L5.10991 6.52C10.3499 6 15.6299 6.2 20.9299 6.73C20.9599 6.73 20.9799 6.73 21.0099 6.73C21.3899 6.73 21.7199 6.44 21.7599 6.05C21.7899 5.64 21.4899 5.27 21.0699 5.23Z"
                fill="#4C4D4F"
                className="group-hover:fill-theme-blue duration-500"
              />
              <path
                d="M19.23 8.14C18.99 7.89 18.66 7.75 18.32 7.75H5.67999C5.33999 7.75 4.99999 7.89 4.76999 8.14C4.53999 8.39 4.40999 8.73 4.42999 9.08L5.04999 19.34C5.15999 20.86 5.29999 22.76 8.78999 22.76H15.21C18.7 22.76 18.84 20.87 18.95 19.34L19.57 9.09C19.59 8.73 19.46 8.39 19.23 8.14ZM13.66 17.75H10.33C9.91999 17.75 9.57999 17.41 9.57999 17C9.57999 16.59 9.91999 16.25 10.33 16.25H13.66C14.07 16.25 14.41 16.59 14.41 17C14.41 17.41 14.07 17.75 13.66 17.75ZM14.5 13.75H9.49999C9.08999 13.75 8.74999 13.41 8.74999 13C8.74999 12.59 9.08999 12.25 9.49999 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z"
                fill="#4C4D4F"
                className="group-hover:fill-theme-blue duration-500"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
