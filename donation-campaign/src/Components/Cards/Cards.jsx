import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
    const [cards, setCards]=useState([]);
    useEffect(()=>{
        fetch('/card.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-1 justify-center items-center py-16 mt-8'>
            {/* cards:{cards.length} */}
            {
                cards.map(card=><Card key={card.id} card={card}/>)
            }
        </div>
    );
};

Cards.propTypes = {
    
};

export default Cards;