import PropTypes from "prop-types";
import "./game-row.css";
import { GameGallery } from "../game-gallery";
import { GameBuy } from "../game-buy";

export const GameRow = ({ games }) => {
  const { title, inWishList, images } = games;
  return (
    <li className="game-row">
      <span className="game-row-name">{title}</span>
      {inWishList && <span className="game-in-whish-list">В бажаному</span>}
      <GameGallery images={images} />
      <GameBuy games={games} />
    </li>
  );
};

GameRow.propTypes = {
  games: PropTypes.shape({
    title: PropTypes.string.isRequired,
    inWishList: PropTypes.bool,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};
