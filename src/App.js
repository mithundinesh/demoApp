import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
