import React, { useState } from "react";
import "./PlayerCard.css";
const PlayerCard = ({ name, img, statistics }) => {
  const [displayStats, setDisplayStats] = useState(true);

  return (
    <div className="cardPlayer"
      
      onClick={() => setDisplayStats(!displayStats)}
    >
      {displayStats ? (
        <img  src={img} alt={name}  width="400px"/>
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