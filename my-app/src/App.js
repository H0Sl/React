import React, { useEffect, useState } from 'react';
import './style/app.css';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/UI/NavBar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth,setIsAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
  },[])

    return ( 
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    );
}

export default App;
