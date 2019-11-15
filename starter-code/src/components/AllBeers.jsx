import React, { Component } from 'react'
import axios from 'axios';


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
        let page = `https://api.punkapi.com/v2/beers?page=${this.props.match.params.id}&per_page=24`;
        axios.get(page)
        .then((theResult)=>{     
        let x = theResult.data;
        this.setState({beers: x, page: this.props.match.params.id, ready: true})
        })
        .catch((err)=>{
        console.log(err);
        })
    }

    displayBeers = () => {
        return this.state.beers.map((eachBeer) => {
            return (

                // <div class="card" style="width: 18rem;">
                //     <img src="..." class="card-img-top" alt="...">
                //     <div class="card-body">
                //         <h5 class="card-title">Card title</h5>
                //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //         <a href="#" class="btn btn-primary">Go somewhere</a>
                //     </div>
                // </div>
            <div className="card col-6 one-beer">
                <img src={eachBeer.image_url} className="card-img-top mx-auto" />
                <div className="card-body">
                    <h5>{eachBeer.name}</h5>
                    <h6>{eachBeer.tagline}</h6>
                </div>
            </div>
            )
        })
    }

    render() {
        if(this.state.ready) {
            return (
                <div className="container-fluid all-the-beers">
                    <div className="row">
                        {this.displayBeers()}
                    </div>
                </div>     
            )
        } else{
            return(<h1> Pouring...</h1>)
        }
              
    }
}
