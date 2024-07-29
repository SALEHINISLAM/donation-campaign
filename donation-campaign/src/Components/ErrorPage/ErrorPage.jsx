import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ErrorPage = props => {
    return (
        <div className='flex flex-col gap-20 container mx-auto justify-center items-center text-center'>
            <h1 className='text-7xl font-extrabold'>404</h1>
            <p className='text-4xl font-semibold'>Sorry, Page Not found.</p>
            <Link to='/'>
            <button className='text-4xl font-bold btn'>Please go back Home</button>
            </Link>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;