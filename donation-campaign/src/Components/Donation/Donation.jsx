import React, { useEffect, useState, PureComponent } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";
import { getDonation } from "../../Utility/LocalStorage";

const Donation = (props) => {
  const donations = useLoaderData();
  const [dataLength, setDataLength] = useState(4);
  
  const [donated, setDonated] = useState([]);
  useEffect(() => {
    const madeDonation = getDonation();
    if (madeDonation.length > 0) {
      const myDonations = [];
      for (const id of madeDonation) {
        const existId = donations.find(
          (donation) => parseInt(donation.id) === parseInt(id)
        );
        if (existId) {
          myDonations.push(existId);
        }
      }
      setDonated(myDonations);
    }
  }, [donations]);
  const handleSeeAll=()=>{
    setDataLength(donated.length)
  }
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-1  pt-28 lg:pt-36 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {donated.slice(0, dataLength).map((card) => (
          <DonationCard key={card.id} card={card} />
        ))}
      </div>
      <div className={`${dataLength==donated.length ||donated.length<=4 ?'hidden':'flex justify-center items-center'}`}>
      <button className="bg-[#009444] mb-20 mt-10 btn text-white font-semibold"
      onClick={()=>handleSeeAll()}
      >See All</button>
      </div>
      
    </div>
  );
};

Donation.propTypes = {};

export default Donation;
