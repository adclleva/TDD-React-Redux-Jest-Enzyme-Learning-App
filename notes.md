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