import React from 'react';
import Header from './component/header/index'
import './app.scss'
import Headline from './component/headline';

const tempArr = [
  {
    fName: "Arvin",
    lName: "Lleva",
    email: "al@email.com",
    age: 25,
    onlineStatus: true
  }
]

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
        <Headline 
          header={"Posts"}
          description={"Click button to render posts!"}
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
