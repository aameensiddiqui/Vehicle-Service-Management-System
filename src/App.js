// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './Components/Homepage/home';
import Login from './Components/LoginFolder/LoginPage';
// import Login from './Components/LoginFolder/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
