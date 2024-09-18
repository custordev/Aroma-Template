export interface ProductProps {
  id: string;
  title: string;
  slug: string;
  price: number | null;
  qty: number | null;
  imageUrl: string | null;
  productImages: string[];
  features: string[];
  category: { title: string };
  description: string | null;
  categoryId: string;
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

export type CategoryProps = {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
  description: string;
};

export type LoginProps = {
  email: string;
  password: string;
};

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}
export interface CartegoryLinkProp {
  slug: string;
  title: string;
  image: any;
}

type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

type Rating = {
  rate: number;
  count: number;
};
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
