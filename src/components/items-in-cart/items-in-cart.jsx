import PropTypes from "prop-types";
import "./items-in-cart.css";

export const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="items-in-cart"> {quantity}</div> : null;
};

ItemsInCart.propTypes = {
  quantity: PropTypes.number.isRequired,
};
