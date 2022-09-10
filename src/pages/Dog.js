import React, { Component } from "react";
import Nav from "./Nav";
import './css/DogDetails.css'
import { Link, Outlet } from "react-router-dom";

class Dog extends Component {
  state = {
    name: null,
    src: null,
    facts: [],
    age: null
  }
  
  componentDidMount() {
    const windows = window.location.href;
    if(windows === 'http://localhost:3000/doglist/whiskey'){
        this.setState({
            name: this.props.dogs[0].name,
            src: this.props.dogs[0].src,
            facts: this.props.dogs[0].facts,
            age: 4
          })
  }
    else if(windows === 'http://localhost:3000/doglist/hazel'){
      this.setState({
        name: this.props.dogs[1].name,
        src: this.props.dogs[1].src,
        facts: this.props.dogs[1].facts,
        age: 6
      })
      
    }
    else if(windows === 'http://localhost:3000/doglist/tubby'){
      this.setState({
        name: this.props.dogs[2].name,
        src: this.props.dogs[2].src,
        facts: this.props.dogs[2].facts,
        age: 6
      })
      
    }
  }
  render() {
    console.log(this.props.dogs);
    
    return (
<div>
      <Nav prop={this.props.dogs}/>
      <div className="DogDetails row justify-content-center mt-5">
        <div className="col-11 col-lg-5">
          <div className="DogDetails-card card">
            <img className="card-img-top" src={`/${this.state.src}.jpg`} alt={this.state.name} />
            <div className="card-body">
              <h2 className="card-title">{this.state.name}</h2>
              <h4 className="card-subtitle text-muted">{this.state.age} years old</h4>
            </div>
            <ul className='list-group list-group-flush'>
              {this.state.facts.map((fact, i) => (
                <li className='list-group-item' key={i}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/doglist" className="btn btn-info">
                Go Back
              </Link>
            </div>
          </div>
         </div>
        </div>
        <Outlet />
      </div>
    );
  }
}
export default Dog;
