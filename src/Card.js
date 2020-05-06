import React from 'react';

const Card = ({name, id, email}) => {
    return(
        <div className="dib tc bg-light-green br4 ma3 grow ba bw1">
          <img className="" src={`https://robohash.org/${name}200X200`} alt="robot"/>
          <div className="ma3 pb2">
            <h2>{name}</h2>
            <h2>{id}</h2>
            <h3>{email}</h3>
          </div>
        </div>
    );
}

export default Card;