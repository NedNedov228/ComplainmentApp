
import './App.css'
import { Routes, Route } from 'react-router-dom/dist/umd/react-router-dom.development'
import Homepage from './components/Homepage'
import Header from './components/Header'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import { isAuth }  from './api/Service'
import PersonalCabinet from './components/PersonalCabinet'

function App() {

console.log('isAuth', isAuth)
  return (
    <>
    <Header />
    <main className='main'>
        <div className='container'>
          <Routes>
            <Route path="/" element={isAuth ? <PersonalCabinet/> : <Homepage />} />
            <Route path="/login" element={ <LoginPage />} />
            <Route path="/reg" element={<RegisterPage />} />
          </Routes>
        </div>
      </main>
      
    </>
  )
}

export default App
