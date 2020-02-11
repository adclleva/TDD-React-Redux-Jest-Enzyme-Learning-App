import moxios from 'moxios'
import { testStore } from './../../utils/index'
import { fetchPosts } from './../actions/index' 

describe('fetchPosts action', () => {

  beforeEach(() => {
    // import and pass your custom axios instance to this method
    moxios.install(); // this is so it will update the library and wont make a request
    // and replace it with moxios
  })

  afterEach(() => {
    moxios.uninstall();
  })

  test('Store is updated correctly', () => { // it doesnt have to be the exact schema
    const expectedState = [ //
      {
        title: 'Texample Title 1',
        body: 'Some Text 1'
      },
      {
        title: 'Texample Title 2',
        body: 'Some Text 2'
      },
      {
        title: 'Texample Title 3',
        body: 'Some Text 3'
      },
    ]

    const store = testStore()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      })
    });

    return store.dispatch(fetchPosts())
    .then(() => {
      const newState = store.getState()
      expect(newState.posts).toBe(expectedState)
    })

  })
})

// integration test