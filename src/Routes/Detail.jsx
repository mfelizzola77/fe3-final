import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <>
      <h1>Detail Dentist Id</h1>
      {dentist && (
       <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Email</th>
           <th>Phone</th>
           <th>Website</th>
           <th>Company</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>{dentist.name}</td>
           <td>{dentist.email}</td>
           <td>{dentist.phone}</td>
           <td>{dentist.website}</td>
           <td>{dentist.company.name}</td>
         </tr>
       </tbody>
     </table>
      )}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail