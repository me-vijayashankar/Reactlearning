import React from "react";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import HomeComponent from "./HomeComponent";
import ShopComponent from "./ShopComponent";
import { Route } from "react-router-dom";
import ProductCoponent from "./ProductCoponent";

function BodyComponent() {
  return (
    <div className="bodyContent">
      <Route path="/" exact component={HomeComponent}></Route>
      <Route path="/about" exact component={AboutComponent}></Route>
      <Route path="/contact" exact component={ContactComponent}></Route>
      <Route path="/shop" exact component={ShopComponent}></Route>
      <Route path="/shop/:id" component={ProductCoponent}></Route>
    </div>
  );
}

export default BodyComponent;
