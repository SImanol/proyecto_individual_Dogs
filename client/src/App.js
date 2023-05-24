import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDogs } from './redux/actions';


function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  
  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);
  
  return (
    <div className="App">
      {location.pathname !== '/' && <Nav/>}

      <Routes>
        <Route path= '/' element={<Landing/>}/>
        <Route path= '/home' element={<Home />} />
        <Route path= '/:id' element={<Detail/>}/>
        <Route path= '/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
