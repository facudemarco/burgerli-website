export type Burgers = {
    id_burger: string;
    name: string;
    description: string;
    price: number;
    stock: boolean;
    image: string;
    ingredients: string;
}

export type Orders = {
    id_order: string;
    combo?: string;
    user_client?: string;
    payment_method: string;
    delivery_mode: string;
    price: number;
    status: string;
    coupon?: string;
    order_notes?: string;
    local: string;
    burgers?: string;
    fries?: string;
    drinks?: string;
    sin: string;
    extras: string;
    promos?: string;
}
export type Cart = {
  cupon: string;
  delivery_mode: string;
  subtotal: number;
  sale: number;
  shipping: number;
  total: number;
  products: string[];
};

export type UsersClient = {
    id: string;
    username: string;
    password: string;
    local: string;
    email: string;
    phone: string;
    favorites: string;
    directions: string[];
    locality: string;
    piso_depto?: string;
}

export type Credentials = {
    id: string;
    username: string;
    password: string;
    local: string;
    role: string;
}
export interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
}