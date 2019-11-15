import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {Link, Switch, Route} from 'react-router-dom';
import AllBeers from './components/AllBeers';

class App extends Component {
   

  render() {


    return (
      <div className="App">
    <Switch>
        // Homescreen
        <Route exact path="/" render = {()=>
        <HomeScreen/>}/>

        //All Beers
        <Route exact path="/all-beers/:id" render = {(props)=>
        <AllBeers
          {...props}
        />}/>
    </Switch>
      </div>
    );
  }
}
{/*  */}

export default App;
