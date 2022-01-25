import React from 'react';

const Card = (props) => {
  return(
    <div className="col s3">
      <div className="card">
        <div className="card-image">
          <img src={`https://robohash.org/${props.id}?set=set2`} alt="Monsters" />
        </div>
        <div className="card-content">
          <h6>{props.monster.name}</h6>
          <p>{props.monster.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
