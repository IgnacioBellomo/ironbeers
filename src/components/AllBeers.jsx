import React, { Component, Fragment } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class AllBeers extends Component {

    constructor(props){
        super(props);
        this.state = {
            beers: null,
            ready: false,
            page: null,
        }
    }

    componentDidMount(){
        this.getAllBeer();
    }

    getAllBeer = () => {
        // This code uses the original punkAPI, allowing for browsing of a larger beer selection displaying 24 per page.
        // The punkAPI doesn't allow for post, so I had to comment it out in order to implement the newBeer route

        // console.log(this.state.page)
        let page;
        let pageNum;
        // if(!this.state.page){
        //     pageNum = 1
        // }else {
        //     pageNum = this.state.page
        // }
        // page = `https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=24`;   
        page="https://ih-beers-api2.herokuapp.com/beers";
        axios.get(page)
        .then((theResult)=>{     
        let x = theResult.data;
        this.setState({beers: x, page: pageNum, ready: true})
        })
        .catch((err)=>{
        console.log(err);
        })
    }

    //PunkAPI page switching buttons
    // pageSwitch = (direction) =>{
    //     this.setState({
    //         page: this.state.page + direction,
    //     }, () => {
    //         this.getAllBeer();
    //     })
    // }

    displayBeers = () => {
        return this.state.beers.map((eachBeer) => {
            console.log(eachBeer._id)
            return (
            <Fragment>
                <div className="card col-10 offset-1 col-md-4 offset-md-1 mt-5 one-beer" key={eachBeer._id}>
                    <img src={eachBeer.image_url} className="card-img-top mx-auto" alt={"Picture of " + eachBeer.name} />
                    <div className="card-body">
                        <h5>{eachBeer.name}</h5>
                        <h6>{eachBeer.tagline}</h6>
                        <Link to = {`/beers/${eachBeer._id}`}>
                                <button className="btn btn-danger btn-sm">Check it out!</button>
                        </Link>
                    </div>
                </div>
                <div className="col-0 col-md-1"></div>
            </Fragment>
            )
        })
    }

    render() {
        if(this.state.ready) {
            console.log(this.state.beers);
            return (
                <div>
                <div className="container-fluid all-the-beers">
                <Link to = {'/'}>
                    <button className="btn btn-secondary mt-4" type="button">Home</button>
                </Link>
                <h1 className="page-title">Ironbeers</h1>
                    <div className="row">
                        {this.displayBeers()}
                    </div>
                    {/*
                    buttons to go to the next or previous page when browsing the punkAPI selection of beers
                    */}
                    {/* <div className="row">
                        { this.state.page > 1 &&
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => {this.pageSwitch(-1)}}>Previous page</button>
                        }
                            <button type="button" className="btn btn-primary btn-sm" onClick={() => {this.pageSwitch(1)}}>Next page</button>
                    </div> */}
                </div>   
                </div>  
            )
        } else{
            return(
                <div className="container-fluid all-the-beers">
                    <h1 className="page-title"> Pouring...</h1>
                </div>
            )
        }
              
    }
}
