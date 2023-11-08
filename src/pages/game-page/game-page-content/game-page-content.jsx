import PropTypes from "prop-types";
import { GameCover } from "../../../components/game-cover/game-cover";
import { GameGenreList } from "../../../components/game-genre-list/game-genre-list";
import { GameBuy } from "../../../components/game-buy/game-buy";
import "./game-page-content.css";

export const GamePageContent = ({ game }) => {
  const { video, image, description, genres } = game;

  return (
    <div className="game-page-content">
      <div className="game-page-content__left">
        <iframe
          width="90%"
          height="400px"
          frameBorder="0"
          src={video}
          title="YouTube Video Player"
        ></iframe>
      </div>
      <div className="game-page-content__right">
        <GameCover image={image} />
        <p>{description}</p>
        <p className="secondary-text">Популярні теги цього продукту:</p>
        <GameGenreList genres={genres} />
        <div className="game-page__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

GamePageContent.propTypes = {
  game: PropTypes.exact({
    video: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    id: PropTypes.number.isRequired,
  }),
};
