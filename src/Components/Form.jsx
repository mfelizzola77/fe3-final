import React, { useState } from 'react';

const Form = ({ onSubmit }) => 
{
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });
  const [error, setError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(''); // Limpiar el mensaje de error al cambiar el valor de un campo
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    // Validar nombre completo
    if (formData.fullName.length <= 5) {
      setError('Por favor verifique su información nuevamente');
      return false;
    }

    // Validar email
    if (!isEmailValid(formData.email)) {
      setError('Por favor verifique su información nuevamente');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Mostrar por consola los datos enviados
      console.log('Datos enviados:', formData);
      // Llamar a la función externa para manejar el envío
      onSubmit(formData);
      setSubmitSuccess(true);
    } else {
      setSubmitSuccess(false);
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>

      {error && <p>{error}</p>}
      {submitSuccess && (<p>Gracias {formData.fullName}, te contactaremos cuanto antes vía mail</p>)}
    </div>
  );
};

export default Form;
