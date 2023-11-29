import React, { useContext } from 'react';
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { dentists } = useContext(ContextGlobal);
  
  return (
      <main className="" >
          <h1>Home</h1>
          <div className='card-grid'>
            {dentists.map( dentist => 
              <Card key={dentist.id} dentist={dentist} />)}
          </div>
      </main>
  )
}

export default Home