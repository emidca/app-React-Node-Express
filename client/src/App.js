import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateActivity from "./components/CreateActivity"
import Detail from './components/Detail';

function App() {  //browserrouter envuelve el div
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/activities' element={<CreateActivity/>}/>
    <Route path='/home/:id' element={<Detail/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
