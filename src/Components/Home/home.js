import React from 'react';
import Header from "../../layouts/header"
import MainContent from './mainContent';
import Startpage from './Startpage';

function Home() {
    return ( 
        <>
            <Header />
            <Startpage />
            <MainContent />
        </>
     );
}

export default Home;