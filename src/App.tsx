/** React komponens */
import { Route, Routes } from "react-router-dom";

/** Page komponensek */
import Home from "./pages/Home";
import Project from "./pages/Project";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects'>
          <Route index element={<Home />} />
          <Route path=':id' element={<Project />} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;