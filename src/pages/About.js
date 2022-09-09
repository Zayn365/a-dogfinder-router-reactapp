import React, { Component } from 'react'
import Nav from './Nav'

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav prop={this.props.dogs}/>
        <h1 className='display-2'>Ab<span className="text-danger">out</span></h1>
        </div>
    )
  }
}
