import React from "react";
import { Container } from "@mui/system";
import "components/FooterComponentContent/FooterComponentContent.scss";

export const FooterComponentContent = () => {
  return (
    <footer className="FooterComponent-content">
      <Container>
        <div className="row">
          <div className="localization FooterComponent-column">
            <h4 className="FooterComponent-logo">Localization</h4>
            <li>Envato</li>
            <li> Level 13, 2 Elizabeth</li>
            <li> Victoria 3000</li>
            <li> Australia</li>
          </div>
          <div className="shortcut-links FooterComponent-column">
            <h4 className="FooterComponent-logo">Shortcut links</h4>
            <div className="shortcut-links-content">
              <a href="/">- Lorem ipsum</a>
              <a href="/">- Cras at tortor</a>
              <a href="/">- Donec lacinia</a>
              <a href="/">- Nullam auctor</a>
              <a href="/">- Aliquam ut odio</a>
              <a href="/">- Donec tempus mi</a>
            </div>
          </div>
          <div className="shortcut-links-contents">
            <div className="FooterComponent-column">
              <div className="shortcut-links-content">
                <a href="/">- Nullam auctor</a>
                <a href="/">- Donec lacinia</a>
                <a href="/">- Aliquam ut odio</a>
                <a href="/">- Cras at tortor</a>
              </div>
            </div>
          </div>
          <div className="contact-with-us FooterComponent-column">
            <h4 className="FooterComponent-logo">Contact with us</h4>
            <div className="contact-with-us-text">
              Nullam viverra consectetuer quisque cursus et.
            </div>
            <a href="/">+61 (0) 3 8376 6284 </a>
            <a href="/">noreply@envato.com </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
