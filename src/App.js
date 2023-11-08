import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  const Layout = () => {
    return (
      <div>
        <Nav />
        <Outlet />
      </div>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="main" element={<Main />} />
          <Route path=":movieId" element={<Detail />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
