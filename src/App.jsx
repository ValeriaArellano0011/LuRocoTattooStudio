import React from 'react'
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import Main from './components/main/Main'
import Home from './pages/Home'
import Layout from './layout/Layout'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <></>
          </Routes>
        </Layout>
    </div>
  )
}

export default App