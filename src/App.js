import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink, } from 'react-router-dom';
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>

        <header>
          <nav>
            {/* <Sidebar /> */}
          </nav>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Sidebar />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
