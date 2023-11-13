import React from "react";
import "./CategoriesStyle.css";
import NavigateBar from "./NavigateBar";
import Categories from "./Categories";
import Card from "./Card";

export default function Prueba() {
  return (
    <div className="principalContainer_action">
      {/*       <NavigateBar /> */}
      <div className="bg-success">
        <Card />
      </div>
      <div>
        <Categories />
      </div>
    </div>
  );
}
