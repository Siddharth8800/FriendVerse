import Home from "./pages/Home";
import Join from "./pages/Join";
import Catalogue from "./pages/Catalogue";
import Compatiblity from "./pages/Compatiblity";
import { pages } from "./components/pagedir";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const generateRoutes = () => {
    return pages.map((page) => {
      let Component = page;
      return <Route path={page} element={<Component />}></Route>;
    });
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          {generateRoutes()}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
