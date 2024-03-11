import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigate from "./components/Navbar";
import NoteState from "./contexts/notes/notesState";
import Alerts from "./components/Alerts";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  return (
    <div className="App">
      <NoteState>
        <Navigate />
        <Alerts alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
              <Route path="home" element={<Home showAlert={showAlert} />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login showAlert={showAlert} />} />
              <Route
                path="register"
                element={<Register showAlert={showAlert} />}
              />
            </Route>
          </Routes>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
