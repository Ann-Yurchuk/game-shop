import PropTypes from "prop-types";
import { GameCover } from "../../../components/game-cover";
import { GameGenreList } from "../../../components/game-genre-list";
import { GameBuy } from "../../../components/game-buy";
import "./game-page-content.css";

export const GamePageContent = ({ games }) => {
  const { video, image, description, genres } = games;

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
          <GameBuy games={games} />
        </div>
      </div>
    </div>
  );
};

GamePageContent.propTypes = {
  games: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    category: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    video: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    inWishList: PropTypes.bool,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};
