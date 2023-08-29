import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar,Feed,Search,Video,Channel } from './components'
const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000'}}>
        <Navbar />

        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<Video/>} />
            <Route path="/channel/:id" element={<Channel/>} />
            <Route path="/search/:searchTerm" element={<Search/>} />
        </Routes>

    </Box>
    </BrowserRouter>
  )
}

export default App