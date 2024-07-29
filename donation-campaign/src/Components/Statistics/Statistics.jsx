import React, { useEffect, useState, PureComponent } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { getDonation } from "../../Utility/LocalStorage";
import { PieChart, ResponsiveContainer, Cell, Pie, Tooltip, Legend } from "recharts";

const Statistics = (props) => {
  const donations = useLoaderData();
  const [donated, setDonated] = useState([]);
  let totalDonationAmount = 12;
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

  const data = [
    { name: "Your Donation", value: donated.length },
    { name: "Total Donation", value: totalDonationAmount },
  ];
  const COLORS = ["#00C49F", "#FF444A"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };
  return (
    <div className="container mx-auto p-1  pt-28 lg:pt-36 pb-10 flex justify-center items-center min-h-screen">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          isAnimationActive={true}
          labelLine={false}
          cy="50%"
          cx="50%"
          label={renderCustomizedLabel}
          outerRadius={136}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Tooltip />
          
        </Pie>
        <Legend/>
      </PieChart>

    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;
