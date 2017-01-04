import React, { Component } from 'react';
import './App.css';
import firebase from './config.js'
class App extends Component {
  constructor() {
    super();
    this.state ={
      chat: ""
    }
  }
  authenticate(provider){
    firebase.auth().signInWithPopup(provider)
    .catch(err => console.error(err))
  }
  signout(){
    firebase.auth().signOut()
  }
  componentDidMount() {
    const rootRef = firebase.database().ref('chat');
    rootRef.on('value', snap => {
      this.setState({
        chat: snap.val()
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.chat}</h1>
        <button onClick={this.authenticate.bind(this, new firebase.auth.GoogleAuthProvider())}>
        login with your google account</button>
        <button onClick={this.signout.bind(this)}>Sign out</button>

      </div>
    );
  }
}
export default App;
