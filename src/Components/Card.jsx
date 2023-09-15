import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {

  const {toggleFavorite, isFavorite} = useContext(ContextGlobal)

  return (
    <div className="card">
      <Link to={`/detail/${dentist.id}`}>
        <img className="img" src="./images/doctor.jpg" alt="doctor" />
        <h3>{dentist.name}</h3>
        <h3>{dentist.username}</h3>
        <h4>{dentist.id}</h4>      
      </Link>
      <button onClick={() => toggleFavorite(dentist)} className={`favButton ${isFavorite(dentist) ? 'bg-red' : ''}`}>
        {isFavorite(dentist) ? 'Remove from favorite' : 'Add to favorite'}
      </button>
    </div>
  );
};

export default Card;