import React from "react";
import { useState } from "react";
import { validate1, validate2 } from "./validations.js";
import './Form.modules.css'


export default function Form (props) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const [passwordFocused, setPasswordFocused] = useState(false); 


    function handleChange(event){
        const property = event.target.name;
        const value = event.target.value;
        
        setUserData({...userData, [property]: value });
        validate1({...userData,[property]: value}, errors, setErrors)
        if (passwordFocused) {
            validate2({...userData,[property]: value}, errors, setErrors) 
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input 
                value={userData.email}
                name ="email" 
                placeholder="Escribe tu email..." 
                onChange={handleChange}
                type="text" 
                className={errors.email && 'warning'}
            />
            <p className='danger'>{errors.email}</p>

            <label htmlFor="password">Contraseña:</label>
            <input 
                value={userData.password}
                name ="password" 
                placeholder="Escribe tu contraseña..." 
                onChange={handleChange}
                type="password" 
                className={errors.password && 'warning'}
                onFocus={()=>setPasswordFocused(true)}
            />
            <p className='danger'>{errors.password}</p>

            <button type="submit"> Entrar </button>
        </form>
    )
}