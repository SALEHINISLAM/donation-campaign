import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Banner.css'
const Banner = ({handleSearch}) => {
    
    return (
        <div id='banner' className=' flex justify-center items-center'>
            <div className="w-full bg-white h-full bg-opacity-85 flex flex-col justify-center items-center gap-8">
            <h1 className='text-5xl text-black font-bold text-center'>I Grow By Helping People In Need</h1>
            <div className="flex flex-row">
            <input id='search-box' type="text" placeholder="Search here...." className="input input-bordered w-full max-w-lg bg-white text-black rounded-r-none" />
            <button className="btn btn-error rounded-l-none text-white"
            onClick={handleSearch}
            >Search</button>
            </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleSearch: PropTypes.func,
};

export default Banner;