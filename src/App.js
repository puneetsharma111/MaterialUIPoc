import React from 'react';
import Layout from './components/Layout';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Layout/>
    </div>
    </BrowserRouter>
  );
}

export default App;
