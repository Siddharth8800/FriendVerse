import Home from "./pages/Home";
import Join from "./pages/Join";
import Catalogue from "./pages/Catalogue";
import Compatibility from "./pages/Compatibility";
import { pages } from "./components/pagedir";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/join" element={<Join></Join>}></Route>
          <Route path="/catalogue" element={<Catalogue></Catalogue>}></Route>
          <Route path="/compatibility"element={<Compatibility></Compatibility>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
