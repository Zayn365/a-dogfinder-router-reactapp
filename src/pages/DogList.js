import React, { Component } from "react";
import Nav from "./Nav";
import './css/DogList.css';
import {Link , Outlet} from 'react-router-dom'

export default class DogList extends Component {
  render() {
    return (
      <div>
        <Nav prop={this.props.dogs} />
        <h1 className="display-2">
          Dog<span className="text-danger">List</span>
        </h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map((d,k) => {
              return (
                <div className="col-lg-4" key={k}>
                  <h2>{d.name}</h2>
                  <Link exact='true' to={`/doglist/${d.name.toLowerCase()}`}>
                  <img
                  className="img" 
                  src={`/${d.src}.jpg`} 
                  alt={d.name} />
                  </Link>
                  <h4>FACTS About <span className="text-danger">{d.name}</span></h4>
                  <div className="text-secondary" style={{fontSize: '20divx' , textAlign: 'left', display: 'inline-block'}}>
                    <br />
                    {d.facts.map((f,k) => {
                      return <ul key={k}>
                        <li key={k}>{f}</li>
                      </ul>
                    })}
                    <br />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    );
  }
}
