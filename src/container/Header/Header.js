import React from "react";
import "container/Header/Header.scss";
import { MainLogoImg } from "container/MainLogoImg/MainLogo";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div class="row">
          <div className="col-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-menu-NavLink" : "menu-NavLink"
              }
            >
              <img
                src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-logo.png"
                alt=""
              />
            </NavLink>
          </div>
          <div className="col-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-menu-NavLink" : "menu-NavLink"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "active-menu-NavLink" : "menu-NavLink"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="category">
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  isActive ? "active-menu-NavLink" : "menu-NavLink"
                }
              >
                Category
              </NavLink>
              <ul className="submenu">
                <li>
                  <NavLink
                    to="/category/Messages-spa"
                    className={({ isActive }) =>
                      isActive ? "active-menu-NavLink" : "menu-NavLink"
                    }
                  >
                    Messages & spa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/Natural-diet"
                    className={({ isActive }) =>
                      isActive ? "active-menu-NavLink" : "menu-NavLink"
                    }
                  >
                    Natural diet
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/Clean-enviroment"
                    className={({ isActive }) =>
                      isActive ? "active-menu-NavLink" : "menu-NavLink"
                    }
                  >
                    Clean enviroment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/Complex-tests"
                    className={({ isActive }) =>
                      isActive ? "active-menu-NavLink" : "menu-NavLink"
                    }
                  >
                    Complex tests
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/Meditation"
                    className={({ isActive }) =>
                      isActive ? "active-menu-NavLink" : "menu-NavLink"
                    }
                  >
                    Meditation
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/specialists"
                className={({ isActive }) =>
                  isActive ? "active-menu-NavLink" : "menu-NavLink"
                }
              >
                Specialists
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-clinic"
                className={({ isActive }) =>
                  isActive ? "active-menu-NavLink" : "menu-NavLink"
                }
              >
                Our clinic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active-menu-NavLink" : "menu-NavLink"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="favorits">
              <NavLink
                to="/favorits"
                className={({ isActive }) =>
                  isActive ? "active-menu-NavLink" : "menu-NavLink"
                }
              >
                Favorits
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/buy-now"
                className={({ isActive }) =>
                  isActive ? "active-menu-NavLink" : "menu-NavLink"
                }
              >
                Buy now
              </NavLink>
            </li>
          </div>
        </div>
      </header>
      <MainLogoImg />
    </>
  );
};
