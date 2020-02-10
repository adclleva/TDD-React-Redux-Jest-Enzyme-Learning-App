For this file structured, we are creating our specs within the component folders/files
And also having the index for each folder component

this link shows the filenaming conventions for running tests
https://create-react-app.dev/docs/running-tests/

Shallow Rendering API
https://blog.usejournal.com/testing-with-jest-and-enzyme-in-react-part-4-shallow-vs-mount-in-enzyme-d60cad73f85c
Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
https://airbnb.io/enzyme/docs/api/shallow.html

you can have nested descrie functions for tests

beforeEach runs before any of the tests

sometimes it's good practice to have a good data-test attribute 

for checking/testing the proptypes you just call it just like 
PropTypes.checkPropTypes, but it returns any problems as an error message string
https://github.com/ratehub/check-prop-types
This manually check PropTypes-compatible proptypes, returning any errors instead of logging them to console.error.
This function is more suitable for checking propTypes in unit tests than mocking console.error, avoiding some serious problems with that approach.

https://medium.com/@krishankantsinghal/what-is-jest-and-enzyme-how-it-can-help-us-writing-test-cases-for-our-react-js-component-8bb5f61f0116
Jest is a javascript testing framework , created by developers who created react.
Jest is not limited to react framework, it is general purpose javascript testing 
framework. but as it is from react developers more inclination is the|re.
Enzyme is another framework which is specifically designed to test react components.
Enzyme, created by Airbnb, adds some great additional utility methods for rendering 
a component (or multiple components), finding elements, and interacting with elements.

Jest is a simple framework. it has two global object knows as describe and it . 
As name suggest describe , describe about the test and it is used to test.

We create the store for state management, and we need to at least pass one reducer

Store An Object that holds the applications state data
Reducer A function that returns some state data. Is triggered by an action type
Action An object that tells the reducer how to change the state. 
  It must contain a type property. It can optionally contain a payload property

https://github.com/reduxjs/redux-thunk
Redux Thunk middleware allows you to write action creators that return a function
instead of an action. The thunk can be used to delay the dispatch of an action,
or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

React is a library and has a View, but lacks Model and Controller components.
Angular is a framework, included in the list of the most popular JavaScript frameworks.

for currying functions ES6
https://medium.com/front-end-weekly/javascript-es6-curry-functions-with-practical-examples-6ba2ced003b1

making assertions in jest/enzyme is when you use expect

when utilizing redux we have to pass one reducer to the store so the app wont crash

keep in mind that reducers are pure functions, it wont mutate a not piece of state and not mutate the original
also doesn't utilize any complex logic, only return a new piece of state given the payload

https://redux.js.org/basics/reducers#reducers
It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). 
It's very important that the reducer stays pure. 
Things you should never do inside a reducer:
  Mutate its arguments;
  Perform side effects like API calls and routing transitions;
  Call non-pure functions, e.g. Date.now() or Math.random().