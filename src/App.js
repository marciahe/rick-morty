import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
// import Error404 from './components/Error404/Error404.jsx';
import Form from './components/Form/Form.jsx';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
// import style from ".App.module.css";

function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      const URL_BASE = "https://rickandmortyapi.com/api";
      
      if (characters.some((char) => char.id === id)){
         return alert("Ya agregaste ese personaje")
      }

      fetch(`${URL_BASE}/character/${id}`)
         .then(response=>response.json())
         .then(data=>{
            if(data.name){
               setCharacters((oldChars) => [...oldChars, data]);
            }else{
               alert("No se encontró a ese personaje. Intenta de nuevo.")
            }
         });
   };

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => char.id !== id));
   };

   //BASE DE DATOS LOGIN
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "w@w.com";
   const PASSWORD = "12345678a";
   
   function login(userData){
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      } else {
         alert ("No existe una cuenta con esos datos")
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);


   return (
      <div className='App'>
         {window.location.pathname === "/" ? null : <Nav onSearch={onSearch} />}

         <Routes>
            <Route path= "/home" element = {<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={ <About/> } />
            <Route path="/detail/:id" element={ <Detail/>} />
            <Route path="/" element={ <Form login={login}/> } />
            <Route path="*" element={ <Navigate to="/" /> } />
         </Routes>
      </div>
   );
}

export default App;