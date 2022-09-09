import React, { Component } from 'react'
import Nav from './Nav'

export default class Home extends Component {
  render() {
    // console.log(this.props.dogs)
    return (
      <div>
        <Nav prop={this.props.dogs} />
        <h1 className='display-2 text-center'>Ho<span className="text-danger">me</span></h1>
       </div>
    )
  }
}
