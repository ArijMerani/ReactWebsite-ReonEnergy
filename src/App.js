import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ChartPage from './Components/ChartPage';
import tablePage from './Components/TablePage';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' Component={Home} />
        <Route path='/chart' Component={ChartPage} />
        <Route path='/table' Component={tablePage} />
      </Routes>
    </Router>
  );
}

export default App;
