import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  
  const {id} = useParams()

  const [dentist, setDentist] = useState([])

  const getData = async () => {
    const data = await
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const convert = await data.json();
    setDentist(convert)
    }

    useEffect(() => {
      getData();
    }, [id]);

  return (
    <div className='detail'>
      <h1>Detail Dentist </h1>
      <img src="../images/doctor.jpg" alt="doctor" />
      <h3>Nombre y apellido: {dentist.name}</h3>
      <h3>Email: {dentist.email}</h3>
      <h3>Telefono: {dentist.phone}</h3>
      <h3>Sitio web: {dentist.website}</h3>
    </div>
  )
}

export default Detail