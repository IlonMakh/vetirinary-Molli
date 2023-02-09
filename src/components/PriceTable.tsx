import { IService } from "../types/types";

const services: IService[] = [
  {
    category: "Терапия, терапевтические манипуляции",
    list: [
      {
        name: "Первичный осмотр",
        price: 500,
      },
      {
        name: "Вторичный осмотр",
        price: 350,
      },
    ],
  },

  {
    category: "Хирургия",
    list: [
      {
        name: "Операция 1",
        price: 5500,
      },
      {
        name: "Операция 2",
        price: 3800,
      },
    ],
  },
];

export const PriceTable = () => {
  return (
    <table className="w-full text-center rounded-[20px] bg-theme-blue/[.2] font-text text-[18px] text-black border-separate border-spacing-0 border border-solid border-[2px] border-theme-blue">
      <thead className="font-extrabold">
        <tr className="h-[60px]">
          <th className="w-3/4 border border-solid border-[2px] border-theme-blue rounded-tl-[20px]">
            Наименование услуги
          </th>
          <th className="border border-solid border-[2px] border-theme-blue rounded-tr-[20px]">
            Стоимость услуги
          </th>
        </tr>
      </thead>
      <tbody>
        {services.map((category, index1) => {
          return (
            <>
              <tr className="h-[60px]">
                <td
                  className="border border-solid border-[2px] border-theme-blue font-semibold uppercase"
                  colSpan={2}
                >
                  {category.category}
                </td>
              </tr>
              {category.list.map((service, index2) => (
                <tr
                  key={service.name}
                  className="h-[60px] border border-solid border-[2px] border-theme-blue font-medium"
                >
                  <td
                    className={
                      index1 === services.length - 1 &&
                      index2 === category.list.length - 1
                        ? "w-3/4 border border-solid border-[2px] border-theme-blue rounded-bl-[20px]"
                        : "w-3/4 border border-solid border-[2px] border-theme-blue"
                    }
                  >
                    {service.name}
                  </td>
                  <td
                    className={
                      index1 === services.length - 1 &&
                      index2 === category.list.length - 1
                        ? "border border-solid border-[2px] border-theme-blue rounded-br-[20px]"
                        : "border border-solid border-[2px] border-theme-blue"
                    }
                  >
                    {service.price} ₽
                  </td>
                </tr>
              ))}
            </>
          );
        })}
      </tbody>
    </table>
  );
};
