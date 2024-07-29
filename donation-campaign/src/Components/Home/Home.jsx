import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';

const Home = props => {
    return (
        <div>
            <Banner/>
            <Cards/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;