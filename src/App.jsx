import { Route, Routes } from "react-router-dom";
import NewEvent from "./pages/NewEvent";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
    
      <NavBar />

      <Routes>
        <Route path="/" element={<NewEvent />} />
      </Routes>
    </>
  );
};

export default App;
