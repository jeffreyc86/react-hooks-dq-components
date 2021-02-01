import React from "react";
import TopMenu from "./TopMenu"
import SideMenu from "./SideMenu"

import AlbumsContainer from "./AlbumsContainer"


function App() {
  return <div className="app-container">
    <TopMenu />

    <SideMenu />
    <AlbumsContainer />
    
    </div>;
}

export default App;
