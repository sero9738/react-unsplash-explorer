import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

interface HeaderProps {
  currentRoute: string;
  setRouteCallback: any;
}

function Header({ currentRoute, setRouteCallback }: HeaderProps) {
  return (
    <header id="header">
      <h1>Unsplash Explorer</h1>
      <Navigation
        currentRoute={currentRoute}
        setRouteCallback={setRouteCallback}
      />
    </header>
  );
}

export default Header;
