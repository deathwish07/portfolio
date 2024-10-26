import React from 'react';
import Main from './pages/Main.js';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import PublicS from './pages/PublicS.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/portfolio' element={<Main/>}/>
        <Route path='/publicspeakings' element={<PublicS/>}/>
      </Switch>
    </Router>

  );
}

export default App;
