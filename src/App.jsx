import { Routes, Route, Navigate } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import { useState } from 'react'

import Home from './pages/Home/'
import Resume from './pages/Resume/'
import Portfolio from './pages/Portfolio/'
import Skills from './pages/Skills/'

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme
    const [isDM, setIsDM] = useState(false)
    const handleClick = () => {
        setIsDM((previousValue) => !previousValue)
    }
    return (
        <ConfigProvider
            theme={{
                algorithm: isDM ? darkAlgorithm : defaultAlgorithm,
            }}
        >
            <Routes>
                <Route
                    path={'/'}
                    element={<Home handleClick={handleClick} isDM={isDM} />}
                />
                <Route path={'/resume'} element={<Resume />} />
                <Route path={'/portfolio'} element={<Portfolio />} />
                <Route path={'/skills'} element={<Skills />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </ConfigProvider>
    )
}

export default App
