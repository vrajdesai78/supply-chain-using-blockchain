import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
// import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import AddProduct from "./AddProduct";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/add" component={AddProduct} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
