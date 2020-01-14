import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class NewBeer extends Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        firstBrewed: "",
        brewersTips: "",
        attenuationLevel: 0,
        contributedBy: "",
    }
    addNewBeer = async (e) => {
        e.preventDefault()
        let url = 'https://ih-beers-api2.herokuapp.com/beers/new';
        let newBeer = await axios.post(url, {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.firstBrewed,
            brewers_tips: this.state.brewersTips,
            attenuation_level: this.state.attenuationLevel,
            contributed_by: this.state.contributedBy
        }).catch((err) => {
            console.log(err)
        });
        this.props.history.push('/beers');
    }

    updateField = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
      }

    render() {
        return (
            <div className="new-beer-form">
            <Link to = {'/'}>
                <button className="btn btn-secondary mt-4" type="button">Home</button>
            </Link>
            <h1 className="page-title">Ironbeers</h1>
            <div className="container-fluid">
                <h3 className="page-title2">New Beer</h3>
                <div className="row">
                    <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <form onSubmit={this.addNewBeer} id="newBeerForm" className="pb-4">
                            <div className="form-group">
                                <div className="page-title3" >Name</div>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.name} name="name"/>
                            </div>
                            <div className="form-group">
                                <div className="page-title3">Tagline</div>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.tagline} name="tagline"/>
                            </div>
                            <div className="form-group">
                                <div className="page-title3">Description</div>
                                <textarea onChange={this.updateField} className="form-control" value={this.state.description} name="description" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <div className="page-title3">First Brewed</div>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.firstBrewed} name="firstBrewed"/>
                            </div>
                            <div className="form-group">
                                <div className="page-title3">Brewer's Tips</div>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.brewersTips} name="brewersTips"/>
                            </div>
                            <div className="form-group">
                                <div className="page-title3">Attenuation Level</div>
                                <input onChange={this.updateField} type="number" className="form-control" value={this.state.attenuationLevel} name="attenuationLevel"/>
                            </div>
                            <div className="form-group">
                                <div className="page-title3">Contributed By</div>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.contributedBy} name="contributedBy"/>
                            </div>
                            <button type="submit" className="btn btn-danger">Add beer!</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
