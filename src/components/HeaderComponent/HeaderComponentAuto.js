import React from "react";
import "components/HeaderComponent/HeaderComponent.scss";
export const Menu = ({ rout, name }) => {
  return (
    <>
      <header className="header">
        <div class="row">
          <li>
            <NavLink
              to={rout}
              className={({ isActive }) =>
                isActive ? "active-menu-NavLink" : "menu-NavLink"
              }
            >
              {name}
            </NavLink>
          </li>
        </div>
      </header>
    </>
  );
};
