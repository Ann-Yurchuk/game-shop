import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button/button";
import "./game-buy.css";

export const GameBuy = ({ game }) => {
  const { price, id } = game;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(id));
    } else {
      dispatch(setItemInCart(game));
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
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number,
  }),
};
