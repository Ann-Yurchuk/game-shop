import PropTypes from "prop-types";
import { FilterableGameList } from "../../components/filterable-game-list";
// import { games } from "../../../server/db.json";
// import { GameItem } from "../../components/game-item/game-item";

export const SearchPage = ({ games }) => {
  return (
    <>
      {/* {games.map((game) => ( */}
      <FilterableGameList games={games} />
      {/* //   ))} */}
    </>
  );
};

SearchPage.propTypes = {
  games: PropTypes.shape({
    id: PropTypes.number,
  }),
};
