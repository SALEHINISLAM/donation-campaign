import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({search}) => {
    
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-1 justify-center items-center py-16 mt-8'>
            {
                search.map(card=><Card key={card.id} card={card}/>)
            }
        </div>
    );
};

Cards.propTypes = {
    search: PropTypes.object
};

export default Cards;