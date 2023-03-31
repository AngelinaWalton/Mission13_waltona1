import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TopBanner from "./pages/Home";
import MovieList from "./pages/Movie";
import Home from "./pages/Home";
import Header from "./pages/Podcast";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// class Welcome extends React.Component {
//   render() {
//     return <h1>This is a heading</h1>;
//   }
// }

// class Conclusion extends React.Component {
//   render() {
//     return <p>Hope you enjoy!</p>;
//   }
// }

// function Rando() {
//   return (
//     <div>
//       <h2>Random Number: {Math.random()}</h2>
//     </div>
//   );
// }

// function GoButton(props: any) {
//   return (
//     <div>
//       <button onClick={props.go}>Go!</button>
//       <br></br>
//     </div>
//   );
// }

// function AmountOfGo(props: any) {
//   return <label>{props.num}</label>;
// }

// function App() {
//   // const [count, setCount] = useState(0);
//   // incrementGo is a pointer
//   // const incrementGo = () => setCount(count + 1);
//   return (
//     <div>
//       <header>
//         {/* <GoButton go={incrementGo} />
//         <AmountOfGo num={count} /> */}
//         <Home />
//         {/* <TopBanner heading="Website" /> */}
//         <MovieList />
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <div
            className="App"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <ul>
              <Link
                to="/"
                style={{ color: "black" }}
              >
                Home
              </Link>
              <br></br>
              <Link
                to="/Movie"
                style={{ color: "black" }}
              >
                Movie List
              </Link>
              <br></br>
              <Link
                to="/Podcast"
                style={{ color: "black" }}
              >
                Podcasts
              </Link>
            </ul>
          </div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/Movie"
              element={<MovieList />}
            ></Route>
            <Route
              path="/Podcast"
              element={<Header />}
            ></Route>
          </Routes>
        </header>
      </Router>
    );
  }
}

export default App;
