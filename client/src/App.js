import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigate from "./components/Navbar";
import NoteState from "./contexts/notes/notesState";
import Alerts from "./components/Alerts";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Navigate />
        <Alerts message="This is an alert" />
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
