import React from "react";

export default function Navigation({
  handleHome,
  handleAbout,
  handleContact,
  handleLogin,
  handleRegister,
  handlePortfolio,
}) {
  return (
    <header>
      <div className="button" onClick={handleHome}>
        Home
      </div>
      <nav>
        <ul>
          <li className="button">
            <strike>Coming soon!</strike>
          </li>
          <li className="button" onClick={handleContact}>
            Contact
          </li>
          <li className="button" onClick={handlePortfolio}>
            Portfolio
          </li>
        </ul>
      </nav>
    </header>
  );
}
