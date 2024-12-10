import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Nav/>
        <main className="main-content">
          <Routes>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/admin' element={<AdminPage/>}></Route>
          </Routes>
        </main>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App