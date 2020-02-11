import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './actions/index'
import './app.scss'

import Headline from './component/headline';
import Header from './component/header/index'
import SharedButton from './component/button'
import ListItem from './component/listItem'

const tempArr = [
  {
    fName: "Arvin",
    lName: "Lleva",
    email: "al@email.com",
    age: 25,
    onlineStatus: true
  }
]

class App extends Component {
  constructor(props) { // these props are getting passed down from the store provider
     super(props)
     this.fetch = this.fetch.bind(this)
  }

  fetch() { // here we want to dispatch our actions
    this.props.fetchPosts()
  }

  
  render() {
    
    const configButton = { // this is what we are passing for the button
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    }

    const { posts } = this.props
    console.log("posts", posts)
    return (

      <div className="App">
        <Header/>
        <section className="main">
          <Headline 
            header={"Posts"}
            description={"Click button to render posts!"}
            tempArr={tempArr}
          />
          {/* using the spread operator here gets the props and attributes to be passed down into the button*/}
          <SharedButton {...configButton}/> 
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post
                const configListItem = {
                  title: title,
                  description: body
                }

                return (
                  <ListItem key={index} {...configListItem}/>
                )
              })}
            </div>
            }

        </section>
      </div>
    );
  }
}

// we pass this as a function
const mapStateToProps = state => { // this is the global state from Redux
  return {
    posts: state.posts // here we get the state for posts
  }
}

const mapDispatchToProps = { // this is just an object
  // the keys will be the name of the prop the component will recieve
  // the values will the be action that we want it to be able to dsipatch to the reducer
    fetchPosts: fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // this connects the redux with the react
