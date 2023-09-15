import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

const {dentists} = useContext(ContextGlobal)

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card dentist={dentist}/>
        ))}
      </div>
    </main>
  )
}

export default Home