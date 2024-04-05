import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/home';
import About from './components/about';
import Blog from './components/blog';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/blog' Component={Blog}/>

        </Routes>
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
