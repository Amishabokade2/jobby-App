import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Jobs from './components/Jobs'
import Login from './components/Login'
import NotFound from  './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute';
import JobsItemsDetails from './components/JobItemDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute Component={Home}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<ProtectedRoute Component={Jobs}/>} />
        <Route path="/jobs/:id" element={<ProtectedRoute Component={JobsItemsDetails}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
