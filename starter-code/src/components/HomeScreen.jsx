import React, { Component } from 'react'
// import RandomBeer from './components/RandomBeer';
// import NewBeer from './components/NewBeer';
import {Link} from 'react-router-dom';




{/* <Route exact path="/country/:id" render ={ props => 
    <CountryDetail
        {...props}
        countries= {countries}
        /> } />  */}

export default class HomeScreen extends Component {
    render() {
        return (
            <div className="container-fluid home-screen">
                <div className="row beer">
                    <div className="col-xs-12 beer-pic">
                        <img src="../images/beers.png"/>
                    </div>
                    <div className="col-xs-12 beer-info">
                        <h1>All beer</h1>
                    </div>
                </div>
                <div className="row beer">
                    <div className="col-xs-12 beer-pic">
                        <img src="../images/random-beer.png"/>
                    </div>
                    <div className="col-xs-12 beer-info">
                        <h1>Random beer</h1>
                    </div>
                </div>
                <div className="row beer">
                    <div className="col-xs-12 beer-pic">
                        <img src="../images/new-beer.png"/>
                    </div>
                    <div className="col-xs-12 beer-info">
                        <h1>New beer</h1>
                    </div>
                </div>
            </div>
        )
    }
}
