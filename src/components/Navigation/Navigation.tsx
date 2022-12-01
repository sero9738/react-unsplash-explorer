import React, { useState } from "react";
import "./Navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";

interface NavigationProps {
  currentRoute: string;
  setRouteCallback: any;
}

function Navigation({ currentRoute, setRouteCallback }: NavigationProps) {
  return (
    <nav id="nav">
      <NavigationItem
        name={"LATEST"}
        route={"LATEST"}
        currentRoute={currentRoute}
        setRouteCallback={setRouteCallback}
      />
      <NavigationItem
        name={"POPULAR"}
        route={"POPULAR"}
        currentRoute={currentRoute}
        setRouteCallback={setRouteCallback}
      />
    </nav>
  );
}

export default Navigation;
