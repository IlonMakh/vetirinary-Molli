import { IPet } from "../types/types";
import Chinchilla from "../assets/images/chinchilla.png";
import Cat from "../assets/images/cat.png";
import Dog from "../assets/images/dog.png";
import Turtle from "../assets/images/turtle.png";
import Rat from "../assets/images/rat.png";
import Bird from "../assets/images/bird.png";
import Rabbit from "../assets/images/rabbit.png";
import Humster from "../assets/images/humster.png";
import EditIco from "../assets/icons/edit_ico.svg";
import TrashIco from "../assets/icons/trash_ico.svg";

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
  } else return `${petYear} лет`;
}

export const PetCard = (props: IPetProps) => {
  return (
    <div className="flex flex-col gap-[30px] justify-center items-start w-[300px] p-[20px] bg-[#EFEEED] rounded-[20px] border-solid border-[2px] border-theme-blue font-text text-[18px] text-[#4C4D4F]">
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
          <button>
            <img src={EditIco} alt="edit_button" />
          </button>
          <button>
            <img src={TrashIco} alt="delete_button" />
          </button>
        </div>
      </div>
    </div>
  );
};
