import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
// import Error404 from './components/Error404/Error404.jsx';
import Form from "./components/Form/Form.jsx";
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import style from "./App.module.css";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    const URL_BASE = "https://rickandmortyapi.com/api";
    // const URL_BASE = "http://localhost:3001/rickandmorty";

    if (characters.some((char) => char.id == id)) {
      return alert("Ya agregaste ese personaje");
    }

    try {
      const search = await axios.get(`${URL_BASE}/character/${id}`);
      const data = search.data;
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("No se encontró a ese personaje. Intenta de nuevo.");
      }
    } catch (error) {
      alert("No se encontró a ese personaje. Intenta de nuevo.");
      console.log(error.message);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  return (
    <div className={style.app}>
      {window.location.pathname === "/" ? null : <Nav onSearch={onSearch} />}

      <Routes>
        <Route
          path="/"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/" element={<Form login={login} />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
