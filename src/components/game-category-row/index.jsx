import PropTypes from "prop-types";
import "./game-category-row.css";

export const GameCategoryRow = ({ category = "" }) => {
  return (
    <li className="game-category">
      <h2>{category}</h2>
    </li>
  );
};

GameCategoryRow.propTypes = {
  category: PropTypes.string,
};
