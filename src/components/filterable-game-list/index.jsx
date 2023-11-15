import PropTypes from "prop-types";
import { GameList } from "../game-list";
import { SearchBar } from "../search-bar";
import "./filterable-game-list.css";

export const FilterableGameList = ({ games }) => {
  return (
    <div className="filterable-game-list">
      <SearchBar />
      <GameList games={games} />
    </div>
  );
};

FilterableGameList.propTypes = {
  games: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};
