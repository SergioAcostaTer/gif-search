import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";

import "./normalize.css"
import "./imports.css"
import Details from "./pages/Details";


function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />}/>
        <Route path={"/search"} element={<Search />}/>
        <Route path={"/login"} element={<Login  />}/>
        <Route path={"/profile"} element={<Profile  />}/>
        <Route path={"/favourites"} element={<Favourites  />}/>
        <Route path={"/post/:id"} element={<Details  />}/>
      </Routes>
    </>
  );
}

export default App;
