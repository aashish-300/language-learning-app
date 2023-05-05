import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Screens/Home";
import Translate from "./components/Translate";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/conversation' element={<Translate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
