import { Route, Routes } from "react-router-dom";
import './App.css';
import SingUp from "./components/SingUp/SingUp";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";

function App() {

    // const onSubmit2 = (formData) => logInWithEmailPassword(formData)
  
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/singUp" element={<SingUp />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
  )
}

export default App
