import { useState } from "react";
import PropTypes from "prop-types";
import { GameList } from "../game-list";
import { SearchBar } from "../search-bar";
import "./filterable-game-list.css";

export const FilterableGameList = ({ games }) => {
  const [filterText, setFilterText] = useState("");
  const [inWhishListOnly, setInWhishListOnly] = useState(false);

  return (
    <div className="filterable-game-list">
      <SearchBar
        filterText={filterText}
        inWhishListOnly={inWhishListOnly}
        setFilterText={setFilterText}
        setInWhishListOnly={setInWhishListOnly}
      />
      <GameList
        games={games}
        filterText={filterText}
        inWhishListOnly={inWhishListOnly}
      />
    </div>
  );
};

FilterableGameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.string)])
  ),
};
