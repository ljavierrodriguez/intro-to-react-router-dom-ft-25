import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Services from './views/Services'
import Menu from './components/Menu'
import CharacterDetail from './views/CharacterDetail'

const Layout = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/characters/:id/details' element={<CharacterDetail />} />
                <Route path='/services' element={<Services />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout