import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import About from "./components/AboutPage/About";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Home />
    //   <Footer />
    // </div>
    <div className="app">
      <Router>
        <Navbar />
        <div className="">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/movie/:imdbID" component={MovieDetails} /> */}
            {/* <Route component={PageNotFound} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
