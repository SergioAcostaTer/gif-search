import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";

import "./normalize.css"
import "./imports.css"

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />}/>
        <Route path={"/search"} element={<Search />}/>
      </Routes>
    </>
  );
}

export default App;
