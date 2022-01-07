import React from 'react';
import Banner from '../Banner/Banner'
import Service from '../Services/Service';
import Footer from '../Footer/Footer'

import Offer from '../Offer/Offer'

import Places from '../Places/Places';
import Contact from '../Contacts/Contact';
import Review from '../Review/Review';
const Home = () => {
    return (
        <div>
           <Banner></Banner> 
         <Service></Service>
         <Offer></Offer>
         <Contact></Contact>
         <Review></Review>
         <Places/>
       
       <Footer></Footer>
        </div>
    );
};

export default Home;