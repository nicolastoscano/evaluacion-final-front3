import { createContext, useEffect, useMemo, useState } from "react";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

const [dentists, setDentists] = useState([]);
const [favoriteDentistsIds, setFavoriteDentistsIds] = useState(JSON.parse(localStorage.getItem('favoritesDentistsIds') || '[]'))

const [theme, setTheme] = useState(false)

const isFavorite = (dentist) => {
  return favoriteDentistsIds.includes(dentist.id)
}
const favoriteDentists = useMemo(() => {
  return dentists.filter(isFavorite) 
}, [favoriteDentistsIds, dentists])

const getDentists = async () => { 
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return data
}

useEffect(() => {
  getDentists().then(setDentists).catch(console.error)
}, []);

useEffect(() => {
  localStorage.setItem('favoritesDentistsIds', JSON.stringify(favoriteDentistsIds));
}, [favoriteDentistsIds])

const toggleFavorite = (dentist) => {
  if (isFavorite(dentist)) {
    setFavoriteDentistsIds(favoriteDentistsIds.filter(id => id !== dentist.id));
  } else {
    setFavoriteDentistsIds(favoriteDentistsIds.concat([dentist.id]));
  }
}

  return (
    <ContextGlobal.Provider value={{dentists, setDentists, toggleFavorite, isFavorite, theme, setTheme, favoriteDentists}}>
      {children}
    </ContextGlobal.Provider>
  );
};