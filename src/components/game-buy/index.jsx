import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button";
import "./game-buy.css";

export const GameBuy = ({ games }) => {
  const { price, id } = games;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(id));
    } else {
      dispatch(setItemInCart(games));
    }
  };

  return (
    <div className="game-buy">
      <span className="game-buy__price">{price}грн</span>
      <Button
        onClick={handleClick}
        type={isItemInCart ? "secondary" : "primary"}
      >
        {isItemInCart ? "Видалити із кошику" : " До кошику"}
      </Button>
    </div>
  );
};

GameBuy.propTypes = {
  games: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number,
  }),
};
