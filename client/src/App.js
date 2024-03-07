import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigate from "./components/Navbar";
import NoteState from "./contexts/notes/notesState";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Navigate />
        <Alert message="This is an alert" />
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
