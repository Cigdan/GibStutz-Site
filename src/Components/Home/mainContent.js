import React, { forwardRef } from 'react';
import Team from './team';


const MainContent = forwardRef((props, ref) => {

    return ( 
        <>
            <Team id="mainContent"  ref={ref}/>
        </>
     );
})

export default MainContent;