import React, { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [displayStats, setDisplayStats] = useState(true);

  return (
    <div
      
      onClick={() => setDisplayStats(!displayStats)}
    >
      {displayStats ? (
        <img  src={img} alt={name} />
      ) : (
        <ul>
          {statistics.map((item) => {
            return (
              <li>
              🏀{item}
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <div>
        <a  href={`https://en.wikipedia.org/wiki/${name}`} >{name}</a>
        
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;