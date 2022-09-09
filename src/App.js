import React, { Component } from "react";
// import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DogList from "./pages/DogList";
import Dog from "./pages/Dog"

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "whiskey",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: "hazel",
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: "tubby",
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };

  // getDog(name){
  //   const rname = window.location.href === `/doglist/${name}`; 
  //   if (rname) {
  //     return (
  //       <div>
  //         <img src={`${this.props.dogs.src}.jpg`} alt={this.props.dogs.name} />
  //         <br />
  //         <h1 className="display-2">{this.props.dogs.name}</h1>
  //         <br />
  //         <h3>
  //           FACTS About{" "}
  //           <span className="text-danger">{this.props.dogs.name}</span>
  //         </h3>
  //         <div
  //           className="text-secondary"
  //           style={{
  //             fontSize: "20px",
  //             textAlign: "left",
  //             display: "inline-block",
  //           }}
  //         >
  //           <br />
  //           {this.props.dogs.facts.map((f) => {
  //             return (
  //               <ul>
  //                 <li key={f}>{f}</li>
  //               </ul>
  //             );
  //           })}
  //           <br />
  //         </div>
  //       </div>
  //     );
  //   }
  // };


  render() {
    const dog = this.props.dogs;
     
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home dogs={dog} />} />
          <Route exact path="/about" element={<About dogs={dog} />} />
          <Route exact path="/doglist" element={<DogList dogs={dog} />} />
          <Route exact path={`/doglist/:name`} element={<Dog dogs={dog}/>} />
          {/* <Route exact path="/doglist/:name" 
          element={(<DoSomethingWrapper>
              <Dog />
          </DoSomethingWrapper>)}/>  */}
        </Routes>
      </div>
    );
  }
}

export default App;
