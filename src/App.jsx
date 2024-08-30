// import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscribeForm from "./components/SubscribeForm"
import Success from './components/Success';





const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SubscribeForm />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
