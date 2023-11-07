import PropTypes from "prop-types";
import { calcTotalPrice } from "../../utils";
import { Button } from "../button/button";
import { CartItem } from "../cart-item/cart-item";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <ul className="cart-menu__list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Кошик пустий"}
      </ul>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Всього:</span>
            <span>{calcTotalPrice(items)}грн</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформити замовлення
          </Button>
        </div>
      ) : null}
    </div>
  );
};

CartMenu.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};
