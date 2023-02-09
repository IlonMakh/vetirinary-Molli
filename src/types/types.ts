export interface IService {
  category: string;
  list: IServiceItem[];
}

interface IServiceItem {
  name: string;
  price: number;
}
