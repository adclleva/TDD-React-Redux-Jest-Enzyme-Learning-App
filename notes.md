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

Unit testing means testing individual modules of an application in isolation (without any interaction with dependencies) to confirm that the code is doing things right.
Integration testing means checking if different modules are working fine when combined together as a group.
Functional testing means testing a slice of functionality in the system (may interact with dependencies) to confirm that the code is doing the right things.

Using "data-test" in Tests
http://blog.rstankov.com/using-rel-in-testing/

Promise based HTTP client for the browser and node.js
https://github.com/axios/axios
https://medium.com/better-programming/how-to-use-async-await-with-axios-in-react-e07daac2905f
https://medium.com/better-programming/understanding-async-await-in-javascript-1d81bb079b2c
https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8

information for async and promises
https://www.youtube.com/watch?v=pt_cwna0r0s
https://www.youtube.com/watch?v=V_Kr9OSfDeU
async await is an elegant way of handling promises

using bind is obsolete to bind functions by using class field syntax
https://medium.com/front-end-weekly/do-i-still-need-to-bind-react-functions-in-2019-6d0fe72f40d7

action creators get called within our app where the React and Redux are combined

this helps with the react redux flow https://hackernoon.com/https-medium-com-heypb-react-redux-workflow-in-4-steps-beginner-friendly-guide-4aea9d56f5bd

we need to create a test store in order to run our integration tests

https://github.com/axios/moxios
Moxios is Mock axios requests for testing

