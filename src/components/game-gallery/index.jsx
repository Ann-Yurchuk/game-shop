import PropTypes from "prop-types";
import "./game-gallery.css";

export const GameGallery = ({ images }) => {
  let gallery = images.map((image, index) => (
    <img src={image} alt="preview" key={index} />
  ));

  return <div className="game-gallery">{gallery}</div>;
};

GameGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
