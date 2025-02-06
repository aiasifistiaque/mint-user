export { default as CartDrawer } from "./container/CartDrawer";
export { default as CartItem } from "./card/CartItem";

export type CartItemProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  qty: number;
};
