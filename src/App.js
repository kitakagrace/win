import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateClient from './pages/CreateClient';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home />} />
      <Route path = "contact" element = {<Contact />} />
      <Route path = "login" element = {<Login />} />
      <Route path = "register" element = {<Register />} />
      <Route path='createclient' element = { <CreateClient />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
