import './styles.css';
import LoginProvider from './contexts/LoginContext';
import MenuProvider from './contexts/MenuContext';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <LoginProvider >

      <MenuProvider>
        <BrowserRouter>
          <Navbar />

                <Home />

          <Footer />
        </BrowserRouter>
      </MenuProvider>  

    </LoginProvider>
  );
}

export default App;
