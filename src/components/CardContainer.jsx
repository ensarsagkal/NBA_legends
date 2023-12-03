import React, { useState } from "react";
import PlayerCard from './PlayerCard';
import {data} from "../helper/data"

const CardContainer = () => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
      setValue(e.target.value);
      console.log(value);
    };
  
    const filterFunc = (search) => {
      const inputValue = value.trim().replace(/[^a-zA-Z ]/g, '').toLowerCase();
      if (search.name.toLowerCase().includes(inputValue)) {
        return search;
      }
    }
  
    return (
      <div>
        <div>
          <input
            type="search"
            onChange={handleChange}
            
          />
        </div>
        {value ? (
          <div >
            {data.filter(filterFunc).map(({ name, img, statistics }) => {
              return (
                <PlayerCard
                  key={name}
                  name={name}
                  img={img}
                  statistics={statistics}
                  
  
                />
              );
            })}
          </div>
        ) : (
          <div >
            {data.map(({ name, img, statistics }) => {
              return (
                <PlayerCard
                  key={name}
                  name={name}
                  img={img}
                  statistics={statistics}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  };
  
  export default CardContainer;