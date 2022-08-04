import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home />} />
      <Route path = "contact" element = {<Contact />} />
      <Route path = "login" element = {<Login />} />
      <Route path = "register" element = {<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
