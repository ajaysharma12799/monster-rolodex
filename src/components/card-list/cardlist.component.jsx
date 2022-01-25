import React from 'react';
import Card from '../card/card.component';

const CardList = (props) => {
  return(
      <div className="row">
          {
              props.monsters.map((monster, index) => (
                  <Card key={index} monster={monster} id={index} />
              ))
          }
      </div>
  );
};

export default CardList;
