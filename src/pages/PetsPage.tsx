import { AddButton } from "../components/AddButton";
import { PetCard } from "../components/PetCard";
import { IPet } from "../types/types";

const myPets: IPet[] = [
  {
    name: "Алекс",
    type: "кот",
    breed: "без породы",
    sex: "мужской",
    bornYear: "2023",
  },

  {
    name: "Герда",
    type: "собака",
    breed: "ретривер",
    sex: "женский",
    bornYear: "2015",
  },
];

export const MyPetsPage = () => {
  return (
    <div className="mt-[30px] mb-[50px] max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 flex flex-col items-center">
      <h2 className="font-title text-[48px] mb-[50px]">Ваши питомцы</h2>
      <section className="flex flex-row flex-wrap justify-center items-center gap-[50px]">
        {myPets.map((pet) => (
          <PetCard key={pet.name} pet={pet} />
        ))}
        <AddButton />
      </section>
    </div>
  );
};
