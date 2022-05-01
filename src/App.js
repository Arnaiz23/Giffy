import React from 'react';
import './App.css';

import { Link, Route } from 'wouter'

import ListOfGifs from './components/ListOfGifs';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda' >Gifs de pandas</Link>
        <Link to='/gif/aomine' >Gifs de Aomine Daiki</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
        {/* <ListOfGifs keyword={"haikyuu"} /> */}
      </section>
    </div>
  );
}

export default App;
