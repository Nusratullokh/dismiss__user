import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './routes/Home';
import DeletedUsers from './routes/DeletedUsers';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/deleted">Deleted Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deleted" element={<DeletedUsers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
