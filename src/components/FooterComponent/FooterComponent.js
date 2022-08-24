import React from "react";
import { Container } from "@mui/system";
import "components/FooterComponent/FooterComponent.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

export const FooterComponent = () => {
  return (
    <>
      <footer className="FooterComponent-last-content">
        <Container>
          <div className="row">
            <div className="FooterComponent-2021">
              © 2021 Betheme by <a href="/"> Muffin group</a> | All Rights
              Reserved | Powered by <a href="/"> WordPress </a>
            </div>
            <div className="social">
              <FacebookOutlinedIcon className="facebook" />
              <TwitterIcon className="twitter" />
              <PinterestIcon className="pinterest" />
              <InstagramIcon className="instagram" />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
