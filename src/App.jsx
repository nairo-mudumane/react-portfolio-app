import { Route, Routes } from "react-router-dom";
import { Gradient } from "./components";
import { Home } from "./pages";

const App = () => (
  <>
    <Gradient />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);
export default App;
