import React from 'react';
import './App.css';

import { Link, Route } from 'wouter'

import ListOfGifs from './components/ListOfGifs';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <h1>Giffy</h1>
        </Link>
        <Route path='/' component={Home}/>
        <Route path='/search/:keyword' component={SearchResults} />
        {/* <ListOfGifs keyword={"haikyuu"} /> */}
      </section>
    </div>
  );
}

export default App;
