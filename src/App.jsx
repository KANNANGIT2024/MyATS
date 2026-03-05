import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Jobopen from "./Components/Jobopen";  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobopen" element={<Jobopen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;