import PropTypes from "prop-types";
import { Button } from "../button/button";
import "./game-buy.css";

export const GameBuy = ({ game }) => {
  const { price } = game;
  return (
    <div className="game-buy">
      <span className="game-buy__price">{price}грн</span>
      <Button onClick={() => null} type="primary">
        До кошику
      </Button>
    </div>
  );
};

GameBuy.propTypes = {
  game: PropTypes.shape({
    price: PropTypes.string.isRequired,
  }),
};
