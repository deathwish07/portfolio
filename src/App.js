import React, { useState } from 'react';
import Main from './pages/Main.js';
import { BrowserRouter as Router, Routes as Switch, Route, useNavigate } from 'react-router-dom';
import PublicS from './pages/PublicS.js';
import Blogs from './pages/Blogs.js';
import Post from "./pages/Post.js";
import Write from './pages/Write.js';
import Login from './pages/login/Login.jsx';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  
  return (
    <>
    <Router>
      <Switch>
        <Route path='/portfolio' element={<Main/>}/>
        <Route path='/publicspeakings' element={<PublicS/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/postabc' element= {<Post/>}/>
        {/* <Route path='/write' element={!isAuth? <Write/> : <Login/>}/> */}
        <Route path='/login' element={isAuth? <Write setIsAuth={setIsAuth}/> : <Login setIsAuth={setIsAuth}/>}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

