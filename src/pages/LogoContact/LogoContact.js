import React from "react";
import "./LogoContact.scss";
import { Container } from "@mui/system";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const LogoContact = () => {
  return (
    <>
      <div className="bg">
        <main className="contact-logo-img">
          <Container maxWidth="lg">
            <div className="logo-img-text">
              <h2>Contact us</h2>
            </div>
          </Container>
        </main>
      </div>
      <div className="contact">
        <Container>
          <div className="Contact-and-feel-free">
            <div className="col-6">
              <div className="logo-text">
                Contact and feel free to ask about more details
              </div>
              <div className="num-text">
                <PhoneIphoneIcon htmlColor="#356938" fontSize="large" />
                <span> +61 (0) 33030 404 </span>
              </div>
              <div className="email-text">
                <MailOutlineIcon htmlColor="#356938" fontSize="large" />
                <span> noreply@envato.com </span>
              </div>
              <div className="Mondey-Friday-Saturday">
                <div className="Monday-Friday-end-Saturday">
                  <h4>Monday-Friday</h4>
                  <div className="Mondey-Friday-Saturday-time">
                    8<span>00</span> - 22<span>00</span>
                  </div>
                </div>
                <div className="Monday-Friday-end-Saturday">
                  <h4>Saturday</h4>
                  <div className="Mondey-Friday-Saturday-time">
                    8<span>00</span> - 18<span>00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-block"></div>
          </div>
        </Container>
      </div>
      <main className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.201805238524!2d25.87511613782307!3d50.83960035386237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4725f5628ec5b7df%3A0x2536465e1bfb3c83!2z0LLRg9C7LiDQm9GW0YHQvdCwLCDQptGD0LzQsNC90YwsINCS0L7Qu9C40L3RgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDUyMzM!5e1!3m2!1sru!2sua!4v1656161903652!5m2!1sru!2sua"
          width="100%"
          height="700px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        />
      </main>
    </>
  );
};
