import { Routes, Route, Navigate } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import { useState } from 'react'

import Home from './pages/Home/'

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme
    const darkMode = JSON.parse(localStorage.getItem('darkMode'))
    const [isDM, setIsDM] = useState(darkMode)
    const handleClick = () => {
        setIsDM((previousValue) => !previousValue)
        localStorage.setItem('darkMode', JSON.stringify(!isDM))
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
                    element={
                        <Home
                            handleClick={handleClick}
                            isDM={isDM}
                            setIsDM={setIsDM}
                        />
                    }
                />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </ConfigProvider>
    )
}

export default App
