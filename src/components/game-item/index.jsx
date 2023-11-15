import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GameCover } from "../game-cover";
import { GameBuy } from "../game-buy";
import { GameGenreList } from "../game-genre-list";
import { setCurrentGame } from "../../redux/games/reducer";
import { URLS } from "../../utils";
import "./game-item.css";

export const GameItem = ({ games }) => {
  const { image, title, genres } = games;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(games));
    navigate(`${URLS.game}/${games.title}`);
  };

  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={image} />
      <div className="game-item__details">
        <span className="game-item__title">{title}</span>
        <GameGenreList genres={genres} />
        <div className="game-item__buy">
          <GameBuy games={games} />
        </div>
      </div>
    </div>
  );
};

GameItem.propTypes = {
  games: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }),
};
