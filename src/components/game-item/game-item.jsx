import PropTypes from "prop-types";
import { GameCover } from "../game-cover/game-cover";
import { GameBuy } from "../game-buy/game-buy";
import { GameGenre } from "../game-genre/game-genre";
import "./game-item.css";

export const GameItem = ({ game }) => {
  const { image, title, genres } = game;
  return (
    <div className="game-item">
      <GameCover image={image} />
      <div className="game-item__details">
        <span className="game-item__title">{title}</span>
        <div className="game-item__genre">
          {genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

GameItem.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }),
};
