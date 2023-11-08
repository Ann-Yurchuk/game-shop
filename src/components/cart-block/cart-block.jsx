import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu/cart-menu";
import { ItemsInCart } from "../items-in-cart/items-in-cart";
import { selectItemsInCart } from "../../redux/cart/selector";
import { URLS, calcTotalPrice } from "../../utils";
import "./cart-block.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(selectItemsInCart);
  const navigate = useNavigate();
  const totalPrice = calcTotalPrice(items);

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate(`${URLS.order}`);
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice}грн</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
