import './styles/index.css'
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App