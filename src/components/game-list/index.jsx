import PropTypes from "prop-types";
import { GameCategoryRow } from "../game-category-row";
import { GameRow } from "../game-row";

export const GameList = ({
  games = [],
  filterText = "",
  inWishListOnly = false,
}) => {
  const rows = [];
  let lastCategory = "";

  games.forEach((game, index) => {
    if (game.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inWishListOnly && !game.inWishList) {
      return;
    }

    if (game.category !== lastCategory) {
      rows.push(<GameCategoryRow category={game.category} key={index} />);
    }
    rows.push(<GameRow games={game} key={game.title} />);

    lastCategory = game.category;
  });

  return <ul className="game-list">{rows}</ul>;
};

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string,
  inWishListOnly: PropTypes.bool,
};
