import React, {  useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';

const Home = props => {
    const [cards, setCards]=useState([]);
    const [displayCards, setDisplayCards]=useState([]);
    useEffect(()=>{
        fetch('/card.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

    const handleSearch=()=>{
        const query=document.getElementById('search-box').value;
        if (!query) {
            setDisplayCards(cards);
        }else{
            const searchedDonation=cards.filter(donation=> donation.category.includes(query));
            setDisplayCards(searchedDonation);
        }
    }
    return (
        <div>
            <Banner handleSearch={handleSearch}/>
            <Cards search={displayCards.length==0? cards : displayCards}/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;