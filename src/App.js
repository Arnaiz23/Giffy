import React from 'react';
import './App.css';

import { Link, Route } from 'wouter'

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import Detail from './pages/Detail';
import { GifsConetxtProvider } from './context/GifsContext';

function App() {

  return (
    // ! Si usas provider, hay q pasar value si o si
    <StaticContext.Provider value={{
      name: "adrian",
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <h1>Giffy</h1>
          </Link>
          <GifsConetxtProvider>
            <Route path='/' component={Home} />
            <Route path='/search/:keyword' component={SearchResults} />
            <Route path='/gif/:id' component={Detail} />
          </GifsConetxtProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
