import React from "react";
import "components/MainWeTakeComponent/MainWeTakeComponent.scss";

export const WeTakeContComponent = () => {
  return (
    <>
      <main className="we-take-care">
        <div className="row">
          <div className="we-take-care-img"></div>
          <div className="we-take-care-content">
            <div className="we-take-care-logo">
              <span> We take care of</span>
              mental & physical health
            </div>
            <div className="we-take-care-text">
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco lorem ipsum dolor.
            </div>
            <div className="we-take-care-product">
              <div className="we-take-care-product-flex">
                <div className="we-take-care-product-el">
                  <div className="we-take-care-product-el-img">
                    <img
                      src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-icon-1.png"
                      alt=""
                    />
                  </div>
                  <div className="we-take-care-product-el-text">
                    Lorem ipsum dolor sit amet
                  </div>
                </div>
                <div class="we-take-care-product-el">
                  <div class="we-take-care-product-el-img">
                    <img
                      src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-icon-2.png"
                      alt=""
                    />
                  </div>
                  <div class="we-take-care-product-el-text">
                    Worte mante postra
                  </div>
                </div>
              </div>
              <div class="we-take-care-product-flex">
                <div class="we-take-care-product-el">
                  <div class="we-take-care-product-el-img">
                    <img
                      src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-icon-3.png"
                      alt=""
                    />
                  </div>
                  <div class="we-take-care-product-el-text">
                    <span> Estra para </span>pilastra carera
                  </div>
                </div>
                <div class="we-take-care-product-el">
                  <div class="we-take-care-product-el-img">
                    <img
                      src="https://themes.muffingroup.com/be/clinic4/wp-content/uploads/2020/07/clinic4-home-icon-4.png"
                      alt=""
                    />
                  </div>
                  <div class="we-take-care-product-el-text">
                    Elen vortis mi poreo min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
