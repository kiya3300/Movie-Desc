import React from "react";
import SearchMovies from "./components/SearchMovies";
import "./App.css";
import "./index.css";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Routes>
          <Route exact path="/" element={<SearchMovies />} />
        </Routes>
        <Routes>
          <Route exact path="/sign" element={<Signup />} />
        </Routes>
      </div>
    );
  }
}

export default App;

// ReactDOM.render(<Main />, document.getElementById('root'));
