import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NewEvent from "./pages/NewEvent";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
    
      <NavBar />

      <Routes>
        <Route path="/" element={<NewEvent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
