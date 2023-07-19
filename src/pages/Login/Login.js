import React, { useState } from 'react';
import Title from './components/Title/Title.jsx';
import Label from './components/Label/Label.jsx';
import Input from './components/Input/Input.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
   

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value);
        }
        else {
            setPassword(value);
        }
    }

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    async function handleLogin() {
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;
        try {
          const response = await fetch('https://backend-prograweb-production-fff8.up.railway.app/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: usuario, password: contraseña })
          });
      
          const data = await response.json();
          if(usuario === '' || contraseña === ''){
            setMessage('Por favor ingrese todos los campos');
            }
            else
            {setMessage(data.message);}
            
            if (data.message === 'Login exitoso') {
                await timeout(1000);
                navigate('/registro');
            }
        } catch (error) {
          console.error(error);
        }        
      }
      

    return (
        <div className='login-container'>
            <Title id="id-text" text='Sistema de citas para atención a Estudiantes' />
            <Input
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                }}
                handleChange={handleChange}
   
            >
                <FontAwesomeIcon icon={faUserNinja} />
            </Input>

            
            <Input
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
                }}
                handleChange={handleChange}
            >
           <FontAwesomeIcon icon={faLock} />
            </Input>
            <Link to='/registro'>
            <Label text='¿No tienes una cuenta? Registrate' className='login-link' />   
            </Link>
             
            <label className='label-error'> {message}</label>
            <hr className='down-linea'></hr>
            <button className='login-button' onClick={handleLogin}>Iniciar Sesión</button>

        </div>
    );
}

export default Login;