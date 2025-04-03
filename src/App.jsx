import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import PageHomeComponent from "./components/PageHomeComponent";
import PageVeterinarioComponet from "./components/PageVeterinarioComponent";
import PageFarmaciaComponet from "./components/PageFarmaciaComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavbarComponent />

          <Routes>
            <Route path="/" element={<PageHomeComponent />} />
            <Route path="/veterinario" element={<PageVeterinarioComponet />} />
            <Route path="/farmacia" element={<PageFarmaciaComponet />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
