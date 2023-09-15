import React, { useContext, useMemo } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const {favoriteDentists} = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {favoriteDentists.map((dentist) => (
          <Card dentist={dentist}/>
        ))}
      </div>
    </>
  );
};

export default Favs;