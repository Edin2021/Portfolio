import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {

  const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const getTheme = () => {
    return localStorage.getItem("theme");
  };

  const setLocalTheme = () => {
    const html = document.getElementsByTagName("html")[0];
    const theme = getTheme();
    if (theme) {
      if (theme === "light") {
        html.classList.remove("dark-mode");
        setTheme("light");
      } else {
        html.classList.remove("dark-mode");
        html.classList.add("dark-mode");
        setTheme("dark");
      }
    } else {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  };

  useEffect(() => {
    setLocalTheme();
  }, []);

  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
