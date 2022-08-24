import React from "react";
import { Container } from "@mui/system";
import "./Specialists.scss";

export const Specialist = () => {
  return (
    <div className="mgTop">
      <main className="lets-meet">
        <Container maxWidth="lg">
          <div className="row">
            <div className="lets-meet-img-in-content">
              <img
                src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-specialist-2.jpg"
                alt=""
              />
              <div className="lets-meet-img-text">
                Dr. Mia Melson
                <p> Therapist, Dietitian</p>
              </div>
            </div>
            <div className="lets-meet-content">
              <div className="lets-meet-logo">Let’s meet our specialists</div>
              <div className="lets-meet-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </div>
            </div>
          </div>
        </Container>
      </main>
      <main className="lets-meet">
        <Container maxWidth="lg">
          <div className="row">
            <div className="lets-meet-content">
              <div className="lets-meet-logo">Let’s meet our specialists</div>
              <div className="lets-meet-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </div>
            </div>
            <div className="lets-meet-img-in-content">
              <img
                src="https://rishon.com.ua/storage/specialists/covers/small/vovk-foto-na-saitcr.jpg"
                alt=""
              />
              <div className="lets-meet-img-text">
                Dr. Marcus Beloni
                <p> Therapist</p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <main className="lets-meet">
        <Container maxWidth="lg">
          <div className="row">
            <div className="lets-meet-img-in-content">
              <img
                src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-specialist-3.jpg"
                alt=""
              />
              <div className="lets-meet-img-text">
                Dr. Alicia Perkoni
                <p> Therapist, Dietitian</p>
              </div>
            </div>
            <div className="lets-meet-content">
              <div className="lets-meet-logo">Let’s meet our specialists</div>
              <div className="lets-meet-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};
