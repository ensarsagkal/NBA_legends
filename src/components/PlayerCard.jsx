import React, { useState } from "react";
import "./PlayerCard.css";
const PlayerCard = ({ name, img, statistics }) => {
  const [displayStats, setDisplayStats] = useState(true);

  return (
    <div className="cardPlayer"
      
      onClick={() => setDisplayStats(!displayStats)}
    >
      {displayStats ? (
        <div > <img className="playerImg"  src={img} alt={name} />
        </div>
       
      ) : (
        <ul className="statisticsList">
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