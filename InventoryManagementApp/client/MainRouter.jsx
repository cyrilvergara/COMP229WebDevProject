import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/pages/Home'
import Test from './src/pages/Test'
const MainRouter = () => {
    return (<div>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/test" element={<Test />} />
        </Routes>
    </div>
    )
}
export default MainRouter
