import logo from './logo.svg';
// import './App.css';

// Routing
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// styles
import {GlobalStyle} from './GlobalStyles'

// components
import Header from './components/Header/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
