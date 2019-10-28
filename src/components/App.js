import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";

import Home from "./Home";
import Page from "./pages/Page";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
        <Route path="/page" component={Page} />
      </Router>
    )
  }
}

export default App;
