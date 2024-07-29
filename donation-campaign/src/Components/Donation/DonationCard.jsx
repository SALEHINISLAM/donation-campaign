import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
  
  const {
    id,
    title,
    price,
    category,
    picture,
    card_bg,
    category_bg,
    text_button_bg,
  } = card;
  return (
    <div className="h-full">
      <div className="flex h-full card card-side shadow-xl" style={{backgroundColor:card_bg}}>
        <figure className="w-1/2 md:w-1/3 h-full">
          <img
            src={picture}
            alt="Movie"
            className="h-full w-full"
            style={{height:'100%'}}
          />
        </figure>
        <div className="card-body">
        <h3
            style={{ backgroundColor: category_bg, color: text_button_bg }}
            className="font-semibold text-base bg-opacity-50 px-2 py-1 rounded-md w-fit"
          >
            {category}
          </h3>
          <h2 className="card-title text-black">{title}</h2>
          <p style={{color:text_button_bg , fontWeight:'bold'}}>${price}.00</p>
          <div className="card-actions">
            <Link to={`/donation/${id}`}>
            <button className="btn text-white font-semibold" style={{backgroundColor:text_button_bg}}>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  card: PropTypes.object,
};

export default DonationCard;
