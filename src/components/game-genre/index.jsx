import PropTypes from "prop-types";
import "./game-genre.css";

export const GameGenre = ({ genre }) => {
  return <div className="game-genre">{genre}</div>;
};

GameGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};
