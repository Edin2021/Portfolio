import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="*" component={Error} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
