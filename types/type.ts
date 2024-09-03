export interface Product {
  id: number;
  img: string;
  category: string;
  title: string;
  price: string;
}
export type userProps = {
  name: String;
  firstName: String;
  lastName: String;
  phone: String;
  email: String;
  image: String;
  password: String;
};

export type LoginProps = {
  email: string;
  password: string;
};
