import React, { useState } from 'react';
import Title from './components/Title/Title.jsx';
import Label from './components/Label/Label.jsx';
import Input from './components/Input/Input.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


import './Login.css';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value);
        }
        else {
            setPassword(value);
        }
    }
    console.log('usuario', user);
    console.log('contraseña', password)

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
            <Label text='Registro de nuevo usuario'/>
            <hr className='down-linea'></hr>
            <button className='login-button'>Iniciar Sesión</button>

        </div>
    );
}

export default Login;