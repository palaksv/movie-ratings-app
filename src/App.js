
import './App.css';
import Home from './pages/Home';
import { routePath } from './constants/route';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CategoryMovies from './pages/CategoryMovies';

function App() {
  return (
   <Router>
    <Routes>
     <Route path={routePath.home} element={<Home/>}/>
     <Route path={routePath.categories} element={<CategoryMovies/>}/>
     <Route path={routePath.invalid} element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;
