import PropTypes from "prop-types";
import { FilterableGameList } from "../../components/filterable-game-list";
import { games } from "../../../server/db.json";

export const SearchPage = () => {
  return (
    <>
      <FilterableGameList games={games} />
    </>
  );
};

SearchPage.propTypes = {
  games: PropTypes.shape(),
};
