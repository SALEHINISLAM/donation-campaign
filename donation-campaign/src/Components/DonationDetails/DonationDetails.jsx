import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from '../../Utility/LocalStorage';
const DonationDetails = props => {
    const {id}=useParams();
    const donations=useLoaderData();
    const donation=donations.find(donation=>donation.id==id)
    const {picture, title, text_button_bg, description, price}=donation;
    const handleDonate = () => {
        saveDonation(id);
        toast("Thank you for your Donation!");
    }

    return (
        <div className='container mx-auto p-1  pt-28 lg:pt-36 pb-10 flex flex-col gap-8'>
            <div className="md:h-[700px] h-48 sm:h-72 flex items-end rounded-xl" style={{backgroundImage:`url(${picture})`,backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <div className="md:h-[130px] h-[90px] bg-black bg-opacity-50 w-full flex items-center p-4 md:p-8 rounded-b-xl">
                    <button style={{backgroundColor:text_button_bg}} className='btn text-white font-extrabold'
                    onClick={handleDonate}
                    >Donate ${price}</button>
                </div>
            </div>
            <h1 className='text-5xl font-bold text-black'>{title}</h1>
            <p className='font-medium text-base text-black'>{description}</p>
        </div>
    );
};

DonationDetails.propTypes = {
    
};

export default DonationDetails;