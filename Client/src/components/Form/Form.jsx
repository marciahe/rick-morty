import React from "react";
import { useState } from "react";
import { validate1, validate2 } from "./validations.js";
import style from "./Form.modules.css";


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
        <section>
            <form onSubmit={handleSubmit} className="login">
            {/* <img className="img-form" src="https://i.giphy.com/media/J1XU9sjU2K2pCluvXo/giphy.webp" alt="Morty tocando la armónica"/> */}
            <img className="img-form" src="https://i.giphy.com/media/3ov9jGqLA6K3rsf4lO/giphy.webp" alt="Rick mirando con sospecha"/>
            {/* <img className="img-form" src="https://i.giphy.com/media/kyKuZzsa6bShl3SaHe/giphy.webp" alt="Rick tocando la armónica"/> */}
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="Rick & morty logo"/>
                <label htmlFor="email">Email:</label>
                <input 
                    value={userData.email}
                    name ="email" 
                    placeholder="Escribe tu email..." 
                    onChange={handleChange}
                    type="text" 
                    className={errors.email ? 'warning' : ''}
                />
                <p className={errors.email ? 'danger' : ''}>{errors.email}</p>

                <label htmlFor="password">Contraseña:</label>
                <input 
                    value={userData.password}
                    name ="password" 
                    placeholder="Escribe tu contraseña..." 
                    onChange={handleChange}
                    type="password" 
                    className={errors.password ? 'warning' : ''}
                    onFocus={()=>setPasswordFocused(true)}
                />
                <p className={errors.password ? 'danger' : ''}>{errors.password}</p>

                <button type="submit"> Entrar </button>
            </form>
        </section>
    )
}