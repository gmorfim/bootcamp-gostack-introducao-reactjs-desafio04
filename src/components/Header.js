import React from "react";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import "../assets/scss/header.scss";

function Header() {
  return (
    <header>
      <div className="header">
        <img src={logo} alt="Logo Facebook" />
        <div className="side">
          <strong>Meu Perfil</strong>
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
