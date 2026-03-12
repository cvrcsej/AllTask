import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");


  const changeUsername = (newName) => {
    setUsername(newName);
  };

  return (
    <div className="flex h-screen bg-gray-800 text-white justify-center items-center gap-5">
      <Home username={username} changeUsername={changeUsername} />
      <About email={email} />
      <Contact username={username} email={email} />
    </div>
  );
}

export default App;