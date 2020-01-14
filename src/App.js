import React, { Component } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {Switch, Route} from 'react-router-dom';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';

class App extends Component {


  render() {

    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render = {()=>
            <HomeScreen/>}/>
            <Route exact path="/beers" render = {(props)=>
            <AllBeers
              {...props}
            />}/>
            <Route exact path="/beers/random" render = {() => 
            <SingleBeer
              beer={true}
              />}/>
            <Route exact path="/beers/:id" render = {(props) => 
            <SingleBeer
            {...props}
            />}/>
            <Route exact path="/newbeer" render = {(props) => 
            <NewBeer
              {...props}
            />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
