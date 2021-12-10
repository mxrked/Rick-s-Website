import React from "react";

//* React Router
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//! Imports
import "./imports/styling_imports";
import "./imports/bootstrap_imports";
import "./imports/react-slick_imports";
import "./imports/aos_imports";
import "./imports/lazysizes_imports";

//! Views
import HomeView from "./views/HomeView";
import PortraitsView from "./views/PortraitsView";
import ProjectionsView from "./views/ProjectionsView";
import BlacklightView from "./views/BlacklightView";
import PackagesView from "./views/PackagesView";
import AboutView from "./views/AboutView";
import StoreView from "./views/StoreView";

//! Assets
import OnAllPages from "./helpers/OnAllPages";
import WithRouting from "./helpers/WithRouting";
import Navigation from "./components/nav/Navigation";

//! DONT FORGET THE .htaccess FILE FOR SERVER
const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={HomeView} />
        <Route exact path="/portraits" component={PortraitsView} />
        <Route exact path="/projections" component={ProjectionsView} />
        <Route exact path="/blacklight" component={BlacklightView} />
        <Route exact path="/packages" component={PackagesView} />
        <Route exact path="/about" component={AboutView} />
        <Route exact path="/store" component={StoreView} />
      </Switch>
      <OnAllPages />
      <WithRouting />
    </BrowserRouter>
  );
};

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
