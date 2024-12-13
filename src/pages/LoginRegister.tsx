import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegister: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [contacto, setContacto] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Controla si es formulario de login o registro
  const [errors, setErrors] = useState({
    nombre: false,
    correo: false,
    contraseña: false,
    contacto: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      nombre: !nombre && !isLogin,
      correo: !correo,
      contraseña: !contraseña,
      contacto: !contacto && !isLogin,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      console.log({ nombre, correo, contraseña, contacto });
      // Aquí iría la lógica para manejar el login o el registro
      if (isLogin) {
        alert('Iniciando sesión...');
      } else {
        alert('Registrando usuario...');
      }
    }
  };

  return (
    <section id="login-register" className="login-register-section">
      <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
      <p>{isLogin ? 'Ingresa con tu cuenta' : 'Crea una cuenta nueva'}</p>
      <form onSubmit={handleSubmit} className="login-register-form">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Nombre Completo:</label>
            <input
              type="text"
              id="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required={!isLogin}
            />
            {errors.nombre && <span className="error">Este campo es obligatorio</span>}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          {errors.correo && <span className="error">Este campo es obligatorio</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contacto:</label>
          <input
            type="tel"
            id="contact"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            required={!isLogin}
          />
          {errors.contacto && <span className="error">Este campo es obligatorio</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
          {errors.contraseña && <span className="error">Este campo es obligatorio</span>}
        </div>

        <button type="submit" className="submit-button">
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </button>
      </form>

      <p className="toggle-form" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </p>
    </section>
  );
};

export default LoginRegister;
