export interface IService {
  category: string;
  list: IServiceItem[];
}

interface IServiceItem {
  name: string;
  price: number;
}

export interface IPet {
  name: string;
  type: string;
  breed: string;
  sex: string;
  bornYear: string;
}
