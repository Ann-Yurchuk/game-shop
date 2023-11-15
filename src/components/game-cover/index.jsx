import PropTypes from "prop-types";
import "./game-cover.css";

export const GameCover = ({ image }) => {
  return (
    <div className="game-cover" style={{ backgroundImage: `url(${image})` }} />
  );
};

GameCover.propTypes = {
  image: PropTypes.string.isRequired,
};
