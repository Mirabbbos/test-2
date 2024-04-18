//css
import './index.css';

// route
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/home";
import Retrive from "./pages/retrive";

function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<Retrive />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;