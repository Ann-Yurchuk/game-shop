import { useSelector } from "react-redux";
import { OrderItem } from "../../components/order-item";
import { selectItemsInCart } from "../../redux/cart/selector";
import { calcTotalPrice } from "../../utils";
import "./order-page.css";

export const OrderPage = () => {
  const items = useSelector(selectItemsInCart);

  if (items.length < 1) {
    return (
      <div className="order-page-empty-basket">
        <h1>Ваш кошик пустий...</h1>
      </div>
    );
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem games={game} key={game.id} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} товарів на сумму {calcTotalPrice(items)}грн
          </span>
        </div>
      </div>
    </div>
  );
};
