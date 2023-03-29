import React, { forwardRef } from 'react';
import Team from './Team';


const MainContent = forwardRef((props, ref) => {

    return ( 
        <>
            <Team ref={ref} />
        </>
     );
})

export default MainContent;