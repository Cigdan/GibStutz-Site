import React, { useEffect, useState } from 'react';
import Trophy from "../../images/trophy.svg"
import Mouse from "../../images/mouse.svg"
import Dollar from "../../images/dollar.svg"

function MainContent() {

    function Stats(props){
        const amount = props.amount
        const message = props.message
        const unit = props.unit
        const image = props.image
        const target = props.target
        const waitTime = 2400 / (amount - target)
        const [totalTournaments, setTotalTournaments] = useState(amount)
        useEffect(() => {
            if(totalTournaments > target){
                const interval = setInterval(() => {
                    setTotalTournaments(totalTournaments - 1);
                  }, waitTime);
                  return () => clearInterval(interval);
            }
          }, [totalTournaments]);
          return(
            <div className='stats'>
                <img src={image} alt={message} className="statsIcons"></img>
                <h2 className='tournaments'>{totalTournaments}{unit}</h2>
                <h2 className='tournaments'>{message}</h2>
            </div>
          )
    }




    return ( 
        <>
            <div className='statPage'>
                <Stats amount={20} message="Tournament Wins" target={0} image={Trophy}/>
                <Stats amount={40} message="Tournaments Played" target={3} image={Mouse}/>
                <Stats amount={1000} message="Price Money Won" target={0} unit={"$"} image={Dollar} />
            </div>
        </>
     );
}

export default MainContent;