import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Login from "./pages/Login";


import "./normalize.css"
import "./imports.css"
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />}/>
        <Route path={"/search"} element={<Search />}/>
        <Route path={"/login"} element={<Login  />}/>
        <Route path={"/profile"} element={<Profile  />}/>
      </Routes>
    </>
  );
}

export default App;
