import PropTypes from "prop-types";
import { GameGenre } from "../game-genre/game-genre";
import "./game-genre-list.css";

export const GameGenreList = ({ genres }) => {
  return (
    <ul className="game-genre-list">
      {genres.map((genre) => (
        <GameGenre genre={genre} key={genre} />
      ))}
    </ul>
  );
};

GameGenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
};
