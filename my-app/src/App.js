import React from 'react';
import './style/app.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';

function App() {
   return( 
    <BrowserRouter>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/posts'>
          <Posts/>
        </Route>
    </BrowserRouter>
   )
}

export default App;
