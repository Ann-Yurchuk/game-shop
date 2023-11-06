import { BiCartAlt } from "react-icons/bi";
import "./cart-block.css";

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <BiCartAlt size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">0грн</span>
    </div>
  );
};
