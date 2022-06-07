import React from "react";
import "container/Header/Header.scss";
import Row from "utils/Row";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Row>
          <div className="col-2">
            <img src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-logo.png" />
          </div>
          <div className="col-6">
            <li className="header-menu-home">Home</li>

            <li>Services</li>
            <li>Specialists</li>
            <li>Our clinic</li>
            <li>Contact</li>
            <li className="favorits">Favorits</li>
            <li>Buy now</li>
          </div>
        </Row>
      </header>
    </>
  );
};
