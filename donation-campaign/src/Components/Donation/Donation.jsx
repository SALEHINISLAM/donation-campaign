import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const Donation = (props) => {
  const cards = useLoaderData();
  const [dataLength, setDataLength] = useState(4);
  const handleSeeAll=()=>{
    setDataLength(cards.length)
  }
  return (
    <div className="">
      <div className="container mx-auto p-1  pt-28 lg:pt-36 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {cards.slice(0, dataLength).map((card) => (
          <DonationCard key={card.id} card={card} />
        ))}
      </div>
      <div className={`${dataLength==cards.length ?'hidden':'flex justify-center items-center'}`}>
      <button className="bg-[#009444] mb-20 mt-10 btn text-white font-semibold"
      onClick={()=>handleSeeAll()}
      >See All</button>
      </div>
      
    </div>
  );
};

Donation.propTypes = {};

export default Donation;
