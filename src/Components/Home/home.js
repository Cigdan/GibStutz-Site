import React, {useRef, forwardRef} from 'react';
import Header from "../../layouts/header"
import MainContent from './MainContent';
import Startpage from './Startpage';

function Home() {
    const teamRef = useRef(null)
    return ( 
        <>
            <Header />
            <Startpage teamRef={teamRef} />
            <MainContent ref={teamRef} />
        </>
     );
}

export default Home;