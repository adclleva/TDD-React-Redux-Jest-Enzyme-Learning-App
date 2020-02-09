import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
/**
 * The option we recommend is to use a special React Redux component called 
 * <Provider> to magically make the store available to all container components
 * in the application without passing it explicitly. You only need to use it 
 * once when you render the root component
 */
import { store } from './createStore'

ReactDOM.render(
  // we pass the store that we craeted so it can be accessed inside our app
  <Provider store={store}> 
    <App />
  </Provider>
  , document.getElementById('root'));

