import React from "react";
import Search from "./Search"
import MenuLinks from "./MenuLinks"
import Spawtify from "./Logo"

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Spawtify />
      <MenuLinks />
      <Search />
    </aside>
  );
}

export default SideMenu;
