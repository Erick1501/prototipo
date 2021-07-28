import * as React from "react";
import "../bootstrap";
import icoFB from "../images/facebook.png";
import icoIG from "../images/instagram.png";

const Footer = () => {
  return (
    <main>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h3>Contáctanos</h3>
              <div>
                <div>0987654321</div>
                <div>pastoral@gmail.com</div>
                <div>2497532</div>
              </div>
            </div>
            <div className="col-sm-4">
              <h3>Ubicación</h3>
              <div>
                <div>Iglesia de San Diego de Alcalá</div>
                <div>Calle Farman frente al cementrio</div>
                <div>Quito, Ecuador</div>
              </div>
            </div>
            <div className="col-sm-4">
              <h3>Redes Sociales</h3>
              <div>
                <div className="d-flex flex-row pb-3">
                  <img className="icoFB pr-3 " src={icoFB} />
                  <div>Sìguenos en Facebook</div>
                </div>
                <div className="d-flex flex-row">
                  <img className="icoIG pr-3" src={icoIG} />
                  <div>Sìguenos en Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Footer;
