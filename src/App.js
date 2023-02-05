
import './App.css';
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HOME from "./Pages/Home";
import Ourmenu from './Pages/Menu';
import Booking from './Pages/Book';
import initFontAwesome from "./utility/initFontAwesome";
initFontAwesome();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/Ourmenu" element={<Ourmenu/>} />
        <Route path="/Booking" element={<Booking/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
