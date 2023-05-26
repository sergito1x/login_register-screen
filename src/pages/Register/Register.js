import React, { useState } from 'react';
import Title from "./components/Title/Title.jsx";
import Label from "./components/Label/Label.jsx";
import Input from "./components/Input/Input.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [role, setRole] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
  };

  const handleDocumentNumberChange = (e) => {
    setDocumentNumber(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
  };

  return (
    <div className="register-container">
    <Title id="first-title" text="Sistema de citas para atención a Estudiantes" />
    <Title id="second-title" text="PÁGINA DE REGISTRO"/>
      <form onSubmit={handleSubmit}>
        <div className="public-info-container">
          <Label text="DATOS DE INGRESO" />
          <Input
            attribute={{
              type: "text",
              placeholder: "Nombre de usuario",
              value: username,
              onChange: handleUsernameChange,
            }}
          />
          <Input
            attribute={{
              type: "email",
              placeholder: "Correo electrónico",
              value: email,
              onChange: handleEmailChange,
            }}
          />
          <Input
            attribute={{
              type: "password",
              placeholder: "Contraseña",
              value: password,
              onChange: handlePasswordChange,
            }}
          />
          <Input
            attribute={{
              type: "password",
              placeholder: "Repetir contraseña",
              value: repeatPassword,
              onChange: handleRepeatPasswordChange,
            }}
          />
        </div>
        <div className="private-info-container">
          <Label text="DATOS PERSONALES" />
          <Input
            attribute={{
              type: "text",
              placeholder: "Nombres",
              value: firstName,
              onChange: handleFirstNameChange,
            }}
          />
          <Input
            attribute={{
              type: "text",
              placeholder: "Apellidos",
              value: lastName,
              onChange: handleLastNameChange,
            }}
          />
          <Input
            attribute={{
              type: "text",
              placeholder: "Tipo de documento",
              value: documentType,
              onChange: handleDocumentTypeChange,
            }}
          />
          <Input
            attribute={{
              type: "text",
              placeholder: "Número de documento",
              value: documentNumber,
              onChange: handleDocumentNumberChange,
            }}
          />
          <Input
            attribute={{
              type: "text",
              placeholder: "Rol",
              value: role,
              onChange: handleRoleChange,
            }}
          />
          
        </div>
        
      </form>
      <button id='submit-button'  type="submit">REGISTRAR</button>
    </div>
  );
};

export default Register;