import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, picture, title, category, category_bg, text_button_bg, card_bg } =
    card;
  return (
    <div className="flex justify-center items-center m-2 w-full p-3">
      
      <Link to={`/donation/${id}`} className="w-full">
      <div
        className={`card card-compact w-full shadow-xl `}
        style={{ backgroundColor: card_bg }}
      >
        <figure className="w-full h-48">
          <img src={picture} alt="donation" className="h-full w-full" />
        </figure>
        <div className="card-body">
          <h3
            style={{ backgroundColor: category_bg, color: text_button_bg }}
            className="font-semibold text-base bg-opacity-50 px-2 py-1 rounded-md w-fit"
          >
            {category}
          </h3>
          <h2
            className="card-title font-bold"
            style={{ color: text_button_bg }}
          >
            {title}
          </h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
