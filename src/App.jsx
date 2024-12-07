import './styles/index.css'
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Nav/>
        <main className="main-content">
          <Routes>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App