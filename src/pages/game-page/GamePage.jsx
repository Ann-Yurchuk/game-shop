import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { GamePageContent } from "./game-page-content/game-page-content";
import { selectCurrentGame } from "../../redux/games/selector";
import "./game-page.css";

export const GamePage = () => {
  const games = useSelector(selectCurrentGame);
  const { title } = games;

  if (!games) return null;

  return (
    <div className="game-page">
      <h1 className="game-page__title">{title}</h1>
      <GamePageContent games={games} />
    </div>
  );
};

GamePage.propTypes = {
  games: PropTypes.shape({
    title: PropTypes.string,
  }),
};
