import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class SingleBeer extends Component {



    state = {
        ready: false,
        beer: null,
    }

    componentDidMount(){
        this.getTheBeer();
    }

    getTheBeer = () => {
        let theBeer;

        // Code to pull from the punkAPI
        // if (this.props.beer){
        //     theBeer = `https://api.punkapi.com/v2/beers/${this.props.beer}`;  
        // } else {
        //     console.log(this.props.match.params.id);
        //     theBeer = `https://api.punkapi.com/v2/beers/${this.props.match.params.id}`;
        // }
        if (this.props.beer){
            theBeer = 'https://ih-beers-api2.herokuapp.com/beers/random';
        } else {
            theBeer = `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`;
        }
        axios.get(theBeer)
        .then((theResult)=>{
        let x = theResult.data;     
        console.log(x);
        this.setState({beer: x, ready: true})
        })
        .catch((err)=>{
        console.log(err);
        })
    }

    style = {
        color: 'gray',
        textAlign: 'left',
    }

    otherStyle = {
        textAlign: 'left',
    }
    displayBeer = () => {
        return (
        <div className="container-fluid one-beer">
            <div className="row">
                <div className="col-12 col-lg-5 beer-image">
                    <img src={this.state.beer.image_url}  alt={"Picture of " + this.state.beer.name} />
                </div>
                <div className="col-12 col-lg-7">
                    <div className="row">
                        <div className="col-12 col-lg-10">
                            <h4 className="float-left" style={this.otherStyle}>{this.state.beer.name}</h4>
                            <h5 className="float-right" style={this.style}>{this.state.beer.attenuation_level}</h5>  
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-10">
                            <h6 className="float-left" style={this.style}>{this.state.beer.tagline}</h6>
                            <h6 className="float-right" style={this.otherStyle}>{this.state.beer.first_brewed}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-10">
                            <p>{this.state.beer.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <h6 style={this.style}>{this.state.beer.contributed_by}</h6>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        )

    }

    render() {
        if (this.state.ready){
            return (
                <div className="all-the-beers">
                    <Link to = {'/'}>
                        <button className="btn btn-secondary mt-4" type="button">Home</button>
                    </Link>
                    <h1 className="page-title">Ironbeers</h1>
                    {this.displayBeer()}
                </div>
            )
        } else {
            return (
                <h1 className="page-title">Pouring...</h1>
            )
        }
    }
}
