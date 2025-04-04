import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import PageHomeComponent from './components/PageHomeComponent';
import PageVeterinarioComponet from './components/PageVeterinarioComponent';
import PageFarmaciaComponet from './components/PageFarmaciaComponent';
import PageLoginComponent from './components/PageLoginComponent';
import PageSignInComponent from './components/PageSignInComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './components/FooterComponent';
import NotFoundComponent from './components/NotFoundComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
          <NavbarComponent />
          <div className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<PageHomeComponent />} />
              <Route
                path='/veterinario'
                element={<PageVeterinarioComponet />}
              />
              <Route path='/farmacia' element={<PageFarmaciaComponet />} />
              <Route path='/login' element={<PageLoginComponent />} />
              <Route path='/signIn' element={<PageSignInComponent />} />
              <Route path='*' element={<NotFoundComponent />} />
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
