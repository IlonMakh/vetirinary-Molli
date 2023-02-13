import Puppy from "../assets/images/puppy-contacts.png";
import Location from "../assets/icons/location_contacts.svg";
import Phone from "../assets/icons/phone_contacts.svg";
import Mail from "../assets/icons/mail_contacts.svg";
import Bus from "../assets/icons/bus_ico.svg";
import Car from "../assets/icons/car_ico.svg";

interface IContacts {
  type: string;
  value: string;
  ico: string;
}

interface ITransport {
  type: string;
  numbers: string;
  ico: string;
}

const contacts: IContacts[] = [
  {
    type: "Адрес",
    value: "г. Санкт-Петербург,\n ул. Кораблестроителей, д.16/3",
    ico: Location,
  },
  {
    type: "Телефон",
    value: "+7(812) 456-25-07,\n +7(812) 924-05-67",
    ico: Phone,
  },
  {
    type: "E-mail",
    value: "molli41@yandex.ru",
    ico: Mail,
  },
];

const transports: ITransport[] = [
  {
    type: "автобусы",
    numbers: "7, 42, 128, 151, 152",
    ico: Bus,
  },
  {
    type: "маршрутное такси",
    numbers: "к32, к62, к124, к162, к183, к248, к362",
    ico: Car,
  },
  {
    type: "Троллейбус",
    numbers: "9",
    ico: Bus,
  },
];

export const ContactsSection = () => {
  return (
    <div id="contacts">
      <div className="mt-[120px] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <h3 className="font-title text-4xl text-center mb-[50px]">
            Контакты
          </h3>
          <div className="flex gap-[70px]">
            <div className="w-[390px] bg-theme-grey flex flex-col rounded-[20px]">
              <img src={Puppy} />
              <div className="p-[20px] flex flex-col gap-[15px]">
                {contacts.map((contact) => {
                  return (
                    <div className="flex gap-[20px]" key={contact.type}>
                      <img src={contact.ico} />
                      <div>
                        <h5 className="font-title text-2xl text-theme-blue">
                          {contact.type}
                        </h5>
                        <a
                          href={
                            contact.type === "Телефон"
                              ? "tel: +7(812) 456-25-07"
                              : contact.type === "E-mail"
                              ? "mailto:molli41@yandex.ru"
                              : "https://yandex.by/maps/2/saint-petersburg/?from=mapframe&ll=30.213135%2C59.942166&mode=usermaps&source=mapframe&um=constructor%3A62e9dc4a4e709b9e80759dc54f4062d5403d91f1a3609fc017a20541263cd628&utm_source=mapframe&z=15"
                          }
                          className="font-text text-[16px] whitespace-pre-line"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              {transports.map((transport) => {
                return (
                  <div className="flex gap-[20px]" key={transport.type}>
                    <img src={transport.ico} />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://2gis.ru/spb/directions/tab/bus/points/%7C30.211552%2C59.941921%3B5348660212664017?m=30.205644%2C59.9411%2F17.24"
                    >
                      <span className="font-title text-2xl text-theme-blue">
                        {transport.type}
                      </span>
                      <span className="font-text text-[16px]">
                        - {transport.numbers}
                      </span>
                    </a>
                  </div>
                );
              })}
              <iframe
                className="w-[750px] h-[400px] mt-[20px]"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A62e9dc4a4e709b9e80759dc54f4062d5403d91f1a3609fc017a20541263cd628&amp;source=constructor"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
