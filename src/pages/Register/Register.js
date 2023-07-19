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

  function procesarDatos(datos){
    document.getElementById("resultado").innerHTML = datos;
  }

  function handleAddUser(){
    let usuario = document.getElementById('username').value;
    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('password').value;
    let nombres = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellido').value;
    let tipoDocumento = document.getElementById('tipo-documento').value;
    let numeroDocumento = document.getElementById('numero-documento').value;
    let rol = document.getElementById('rol').value;

    const URL = 'https://backend-prograweb-production-fff8.up.railway.app/crear-usuario' + "/" + usuario + "/" + correo + "/" + contraseña + "/" + nombres + "/" + apellidos + "/" + tipoDocumento + "/" + numeroDocumento + "/" + rol;
    console.log(URL);
    fetch(URL)
    .then(response => response.text())
    .then(procesarDatos)
    .catch(error => console.log(error));

    if(usuario === '' || correo === '' || contraseña === '' || nombres === '' || apellidos === '' || tipoDocumento === '' || numeroDocumento === '' || rol === ''){
      procesarDatos('Por favor ingrese todos los campos');
    }
    else{
      procesarDatos('Usuario creado satisfactoriamente');
    }
  }



  return (
    <div className="register-container">
    <Title id="first-title" text="Sistema de citas para atención a Estudiantes" />
    <Title id="second-title" text="PÁGINA DE REGISTRO"/>
      <form>
        <div className="public-info-container">
          <Label text="DATOS DE INGRESO" />
          <Input
            attribute={{
              id: "username",
              type: "text",
              placeholder: "Nombre de usuario",
              value: username,
             
            }}
          />
          <Input
            attribute={{
              id: "email",
              type: "email",
              placeholder: "Correo electrónico",
              value: email,
              
            }}
          />
          <Input
            attribute={{
              id: "password",
              type: "password",
              placeholder: "Contraseña",
              value: password,
              
            }}
          />
  
        </div>
        <div className="private-info-container">
          <Label text="DATOS PERSONALES" />
          <Input
            attribute={{
              id: "nombre",
              type: "text",
              placeholder: "Nombres",
              value: firstName,
              
            }}
          />
          <Input
            attribute={{
              id: "apellido",
              type: "text",
              placeholder: "Apellidos",
              value: lastName,
            
            }}
          />
          <Input
            attribute={{
              id: "tipo-documento",
              type: "text",
              placeholder: "Tipo de documento",
              value: documentType,
            
            }}
          />
          <Input
            attribute={{
              id: "numero-documento",
              type: "text",
              placeholder: "Número de documento",
              value: documentNumber,
              
            }}
          />
          <Input
            attribute={{
              id: "rol",
              type: "text",
              placeholder: "Rol",
              value: role,
            }}
          />
        </div>
        
      </form>
      <button id='submit-button' onClick={handleAddUser} type="submit">REGISTRAR</button>
      <span id="resultado"></span>
    </div>
  );
};

export default Register;