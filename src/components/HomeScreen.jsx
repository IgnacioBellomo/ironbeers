import React, { Component } from 'react'
// import NewBeer from './components/NewBeer';
import {Link} from 'react-router-dom';


export default class HomeScreen extends Component {
    render() {
        return (
            <div className="container-fluid home-screen">
                <h1 className="page-title">Ironbeers</h1>
                <div className="row">
                    <div className="col-12 col-lg-6 beer-pic">
                        <img src="./images/beers.png" alt="all beers"/>
                        <div>
                        <Link to = {"/beers"}>
                            <button className="btn btn-secondary btn-sm">All beer</button>
                        </Link>
                        <p>Check out our fine selection of beers. We have a beer for everyone!</p>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6 beer-pic">
                        <img src="./images/random-beer.png" alt="random beers"/>
                        <div>
                        <Link to = {"/beers/random"}>
                            <button className="btn btn-secondary btn-sm">Random beer</button>
                        </Link>
                        <p>Feeling lucky? Check out a random beer from our selection!</p>
                        </div>
                    </div>
                    <div className="col-0 col-lg-3"></div>
                    <div className="col-12 col-lg-6 beer-pic">
                        <img src="./images/new-beer.png" alt="new beers"/>
                        <div>
                        <Link to = {"/newbeer"}>
                        <button className="btn btn-secondary btn-sm">New beer</button>
                        </Link>
                    <p>Create a beer of your own for others to try!</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
