import './App.css';
import { Navbar } from './pages/Navbar';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Todo from './app/Todo';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/todo' element={<Todo/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
