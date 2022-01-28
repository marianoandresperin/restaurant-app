import './styles.css';
import LoginProvider from './contexts/LoginContext';
import MenuProvider from './contexts/MenuContext';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './containers/Search';
import Detail from './containers/Detail';
import About from './components/About';

function App() {
  return (
    <LoginProvider >

      <MenuProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/dishfinder' element={<Search />} />
            <Route path="/dish/:dishId" element={<Detail />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MenuProvider>  

    </LoginProvider>
  );
}

export default App;
