import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from './components/LandingPage';

function App() {  //browserrouter envuelve el div
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    </Routes>
    <div className="App">
    </div>
    </BrowserRouter>
  );
}

export default App;
