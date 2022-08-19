import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/home/Home.jsx';
import Profile from './pages/Profile/Profile';
import { Routes, Route, Navigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  
  return (
    <div className="App">
      <div className='blur' style={{ top: '-18%', right: '0' }} ></div>
      <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route path='/' element={user?<Home/>:<Navigate to='/auth' replace={true}/>}/>
        <Route path='/home' element={user?<Home />:<Navigate to='/auth' replace={true}/>} />
        <Route path='/profile/:id' element={user?<Profile />:<Navigate to='/auth' replace={true}/>} />
        <Route path='/auth' element={!user?<Auth />:<Navigate to='/home'replace={true}/>} />

      </Routes>
    </div>
  );
}

export default App;
