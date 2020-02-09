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