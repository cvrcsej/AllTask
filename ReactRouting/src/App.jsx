import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  const user = {
    name: "hello",
    Rollno: "23-5mm",
    College: 'cvr'
  }

  const contact = {
    Email: "cvr.ac.in",
    Phone: 8688939484,
    Location: "Hyderbad"
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>|{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="/contact" element={<Contact contact={contact} />} />
      </Routes>
    </>
  );
}

export default App;