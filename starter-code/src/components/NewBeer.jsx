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
    // name - must be type text
    // tagline - must be type text
    // description - must be type text
    // first_brewed - must be type text
    // brewers_tips - must be type text
    // attenuation_level - must be type number !!!
    // contributed_by - must be type text
    addNewBeer = (e) => {
        e.preventDefault()
        let url = 'https://ih-beers-api2.herokuapp.com/beers/new';
        axios.post(url, {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.firstBrewed,
            brewers_tips: this.state.brewersTips,
            attenuation_level: this.state.attenuationLevel,
            contributed_by: this.state.contributedBy
        }).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        }, () => {
            this.props.history.push('/beers');
        })
    }

    updateField = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
      }

    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-primary">
            <Link to = {'/'}>
                <button className="btn btn-outline-success" type="button">Home</button>
            </Link>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 new-beer-form">
                        <form onSubmit={this.addNewBeer} id="newBeerForm">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.name} name="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="tagline">Tagline</label>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.tagline} name="tagline"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea onChange={this.updateField} className="form-control" value={this.state.description} name="description" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstBrewed">First Brewed</label>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.firstBrewed} name="firstBrewed"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="brewersTips">Brewer's Tips</label>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.brewersTips} name="brewersTips"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="attenuationLevel">Attenuation Level</label>
                                <input onChange={this.updateField} type="number" className="form-control" value={this.state.attenuationLevel} name="attenuationLevel"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contributeBy">Contributed By</label>
                                <input onChange={this.updateField} type="text" className="form-control" value={this.state.contributedBy} name="contributedBy"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
