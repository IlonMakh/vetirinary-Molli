import { PetCard } from "../components/PetCard";
import { IPet } from "../types/types";

const myPets: IPet[] = [
  {
    name: "Алекс",
    type: "кот",
    breed: "без породы",
    sex: "мужской",
    bornYear: "2022",
  },

  {
    name: "Алекс",
    type: "черепаха",
    breed: "без породы",
    sex: "женский",
    bornYear: "2020",
  },

  {
    name: "Алекс",
    type: "шиншилла",
    breed: "без породы",
    sex: "мужской",
    bornYear: "2014",
  },
];

export const MyPetsPage = () => {
  return (
    <div>
      {myPets.map((pet) => (
        <PetCard key={pet.name} pet={pet} />
      ))}
    </div>
  );
};
