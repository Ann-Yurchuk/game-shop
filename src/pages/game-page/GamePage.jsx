import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { GamePageContent } from "./game-page-content/game-page-content";
import { Header } from "../../components/header/header";
import { Container } from "../../components/container/container";
import "./game-page.css";

export const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);
  const { title } = game;

  if (!game) return null;

  return (
    <Container>
      <Header />
      <div className="game-page">
        <h1 className="game-page__title">{title}</h1>
        <GamePageContent game={game} />
      </div>
    </Container>
  );
};

GamePage.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};
