import React, { Component } from "react";
// import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DogList from "./pages/DogList";
import Dog from "./pages/Dog";

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

  render() {
    const dog = this.props.dogs;
    // const getDog = (props) => {
    //   let name = props.match.params.name;
    //   let currentDog = this.props.dogs.find(
    //     (dog) => dog.name.toLowerCase() === name.toLowerCase()
    //   );
    //   return <Dog {...props} dog={currentDog} />;
    // };
    // const DoSomethingWrapper = ({ children }) => {
    //   useEffect(() => {
    //     getDog();
    //   }, []);
    //   return children;
    // };
    // console.log(DoSomethingWrapper)
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home dogs={dog} />} />
          <Route exact path="/about" element={<About dogs={dog} />} />
          <Route exact path="/doglist" element={<DogList dogs={dog} />} />
          <Route exact path={`/doglist/:name`} element={<Dog dogs={dog}/>} />
          {/* <Route exact path='/doglist/:name' element={getDog} /> */}
          {/* <Route
            path="/doglist/:name"
            element={
              <DoSomethingWrapper>
                <Dog  dogs={dog}/>
              </DoSomethingWrapper>
            }
          /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
