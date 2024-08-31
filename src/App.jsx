import { Route, Routes } from "react-router-dom";
import NewEvent from "./pages/NewEvent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewEvent />}></Route>
      </Routes>
    </>
  );
};

export default App;
