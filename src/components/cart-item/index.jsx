import PropTypes from "prop-types";
import "./cart-item.css";

export const CartItem = ({ title, price }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price}грн</span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
};
