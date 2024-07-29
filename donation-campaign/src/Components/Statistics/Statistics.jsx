import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { getDonation } from "../../Utility/LocalStorage";

const Statistics = (props) => {
  const donations = useLoaderData();
  const [donated, setDonated] = useState([]);
  let totalDonationAmount = 0;
  for (let index = 0; index < donations.length; index++) {
    const element = donations[index].price;
    totalDonationAmount += parseInt(element);
  }
  const [donatedMoney, setDonatedMoney]=useState(0);
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
      let myDonationAmount = 0;
      for (let index = 0; index < donated.length; index++) {
        const element = donated[index].price;
        myDonationAmount += parseInt(element);
      }
      setDonatedMoney(myDonationAmount);
    }
  }, [donations,donated]);

  //console.log(totalDonationAmount);

  return (
    <div>
      {donations.length}
      <br />
      {totalDonationAmount}
      <br />
      {donated.length}
      <br />
      {
        donatedMoney
      }
    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;
