import React from "react";
import "./Input.css";

/*Este componente se crea para que sea reutilizado de varias formas
en el proyecto, por ejemplo, en el componente Login, Register, etc.
Se le pasan los atributos que se necesitan para que funcione de la
mejor manera posible. por esa razón los atributos no estan definidos
en el componente, sino que se pasan como parámetros. Asi con todos los componentes
que se creen.
*/
const Input = ({attribute, handleChange, param,children}) => {
    return (
        <div className="input-container">
            <div className="icon">{children}</div>
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder = {attribute.placeholder}
            type= {attribute.type}
            onChange= {(e) => handleChange(e.target.name, e.target.value)}
            className="regular-style"
            
            />
        </div>
    );
}

export default Input;