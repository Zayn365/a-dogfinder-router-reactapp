import React, { Component } from 'react'
import Nav from './Nav'

export default class Dog extends Component {
  
    render() {
        return (
      <div>
            <Nav prop={this.props.dogs}/>
        <h1 className='display-2'>
            Dog<span className="text-danger">Details</span>
        </h1>       
      </div>
    )
  }
}
