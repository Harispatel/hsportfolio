import Home from "./pages/Home/"
import {Routes,Route,Navigate, } from "react-router-dom";
import Resume from "./pages/Resume/";
import Portfolio from "./pages/Portfolio/";
import Skills from "./pages/Skills/";
import { ConfigProvider, theme, Button, Card } from "antd";
import { useState } from "react";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDM, setIsDM] = useState(false);
  const handleClick = () => {
    setIsDM((previousValue) => !previousValue);
   };
  return (
      <ConfigProvider theme={{
      algorithm: isDM ? darkAlgorithm : defaultAlgorithm,
    }}>
      {/* <Card> */}
       <Routes>
            <Route path={'/'} element={<Home handleClick={handleClick} isDM={isDM} />} />
            <Route path={'/resume'} element={<Resume />} />
            <Route path={'/portfolio'} element={<Portfolio />} />
            <Route path={'/skills'} element={<Skills />} />
            <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      {/* </Card> */}
      </ConfigProvider>

  )
}

export default App