import logo from './logo.svg';
// import './App.css';

// Routing
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// styles
import {GlobalStyle} from './GlobalStyles'

// components
import Header from './components/Header/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';


const  App= () => {
  return (
    <Router>       
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* when we fetch a movie, we can set a route params to target the movieId. when we create a link on thumbnails, we can send the id for the movie into here */}
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
        
      </Routes>
      <GlobalStyle/>
    </Router>


  );
}

export default App;
