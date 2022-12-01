import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import ContentBoard from "./components/ContentBoard/ContentBoard";
import LatestView from "./components/LatestView/LatestView";
import PopularView from "./components/PopularView/PopularView";

enum Route {
  LATEST = "LATEST",
  POPULAR = "POPULAR",
}

function App() {
  const [route, setRoute] = useState(Route.LATEST);

  return (
    <div className="App">
      <Header currentRoute={route} setRouteCallback={setRoute}></Header>
      <ContentBoard>
        {route === Route.LATEST ? (<LatestView></LatestView>) : <PopularView></PopularView>}
      </ContentBoard>
    </div>
  );
}

export default App;
