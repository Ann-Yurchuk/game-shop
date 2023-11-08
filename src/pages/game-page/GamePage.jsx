import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { GamePageContent } from "./game-page-content/game-page-content";
import { selectCurrentGame } from "../../redux/games/selector";
import "./game-page.css";

export const GamePage = () => {
  const game = useSelector(selectCurrentGame);
  const { title } = game;

  if (!game) return null;

  return (
    <div className="game-page">
      <h1 className="game-page__title">{title}</h1>
      <GamePageContent game={game} />
    </div>
  );
};

GamePage.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};
