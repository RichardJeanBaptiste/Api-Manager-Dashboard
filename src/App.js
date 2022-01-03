import './App.css';
import { Routes, Route } from 'react-router-dom';
//import Index from './components/Index';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login/:fail" element={<Login failLogin={true}/>}/>
            <Route path="/admin/home/:username/:userId" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
