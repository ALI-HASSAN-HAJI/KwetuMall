import logo from './logo.svg';
import './App.css';
import Home from './pages/users/Arsenal';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/users/auth/Register';
import Login from './pages/users/auth/Login';

function App() {
  return (
  <Router>
    <div className="App">
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/register" element={<Register />} />
           <Route exact path="/login" element={<Login />} />

        </Routes>
    
    </div>
  </Router>
  );
}

export default App;
