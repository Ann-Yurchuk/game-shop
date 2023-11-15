import PropTypes from "prop-types";
import { GameCategoryRow } from "../game-category-row";
import { GameRow } from "../game-row";
import "./game-list.css";

export const GameList = ({ games = [] }) => {
  const rows = [];
  let lastCategory = "";

  games.forEach((game) => {
    if (game.category !== lastCategory) {
      rows.push(
        <GameCategoryRow category={game.category} key={game.category} />
      );
    }
    rows.push(<GameRow games={game} key={game.title} />);

    lastCategory = game.category;
  });

  return <ul className="game-list">{rows}</ul>;
};

GameList.propTypes = {
  games: PropTypes.shape(),
};
