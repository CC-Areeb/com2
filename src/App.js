import './App.css';
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Sidebar></Sidebar>
          <Routes>
            
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
