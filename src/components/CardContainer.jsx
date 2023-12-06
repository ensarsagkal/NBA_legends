import React, { useState } from "react";
import PlayerCard from './PlayerCard';
import {data} from "../helper/data"
import "./CardContainer.css";

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
      <div className="container">
        <div className="inputDiv">
          <input
            type="search"
            onChange={handleChange}
            
          />
        </div>
        {value ? (
          <div className="cards">
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
          <div  className="cards" >
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