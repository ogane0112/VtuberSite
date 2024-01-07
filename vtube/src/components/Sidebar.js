import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SidebarIcon from "./SidebarIcon";
import "../style/App.css"
function Sidebar() {
  // サイドバーの開閉状態を管理する状態変数
  const [isOpen, setIsOpen] = useState(false);

  // サイドバーの開閉をトグルする関数
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <button onClick={toggleSidebar} className="toggle-button">
    <div className={`hamburger-line ${isOpen ? "top-bun" : ""}`}></div>
    <div className={`hamburger-line ${isOpen ? "bottom-bun"  : ""}`}></div>
    <div className={`hamburger-line ${isOpen ? "hidden" : ""}`}></div>
  </button>

    <div className={`Sidebar ${isOpen ? 'open' : 'closed'}`}>
      <SidebarIcon />
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
            >
              <div id="title"><Link to={value.link} className={`link ${window.location.pathname === value.link ? "active-link" : ""}`}>{value.title}</Link></div>
              <div id="icon">{value.icon}</div>
              
            </li>
          );
        })}
      </ul>
    </div>
    </>
  );
}

export default Sidebar;

