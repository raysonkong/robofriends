import React from 'react';
import Card from './Card';

const CardsList = ({robots}) => {
 
   const CardsArray = robots.map(robot => {
    return <Card key={robot.id} name={robot.name} id={robot.id} email={robot.email} />
   })

  return(
    <div>
      {CardsArray}
    </div>
  );
}

export default CardsList;