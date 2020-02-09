import React from 'react';
import Header from './component/header/index'
import './app.scss'
import Headline from './component/headline';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
        <Headline/>
      </section>
    </div>
  );
}

export default App;
