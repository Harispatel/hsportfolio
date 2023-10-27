import Home from "./pages/Home/"
import {Routes,Route,Navigate, } from "react-router-dom";
import Resume from "./pages/Resume/";
import Portfolio from "./pages/Portfolio/";
import Skills from "./pages/Skills/";


function App() {
  return (
    <div>
       <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/resume'} element={<Resume />} />
            <Route path={'/portfolio'} element={<Portfolio />} />
            <Route path={'/skills'} element={<Skills />} />
            <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  )
}

export default App