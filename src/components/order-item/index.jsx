import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GameCover } from "../game-cover";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import "./order-item.css";

export const OrderItem = ({ games }) => {
  const { image, title, price, id } = games;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover image={image} />
      </div>
      <div className="order-item__title">
        <span>{title}</span>
      </div>
      <div className="order-item__price">
        <span>{price}грн</span>
        <AiOutlineCloseCircle
          size={25}
          className="order-item__delete-icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  games: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};
