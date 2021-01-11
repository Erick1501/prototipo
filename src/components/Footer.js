import * as React from "react";
import icoFB from "../images/facebook.png";
import icoIG from "../images/instagram.png";

const Footer = () => {
  return (
    <main>
      <div className="footer">
        <div className="container-fo">
          <div className="col-1">
            <h4>Contactanos</h4>
            <ul>
              <li>0987654321</li>
              <li>Quito, Ecuador</li>
              <li>San Diego </li>
            </ul>
          </div>
          <div>
            <h4>Ubicacion</h4>
            <ul>
              <li>iforma</li>
              <li>asdasd</li>
              <li>asdasd</li>
            </ul>
          </div>
          <div className="col-3">
            <h4>Redes Sociales</h4>
            <ul>
              <li>
                {" "}
                <img className="icoFB" src={icoFB} />
                Sìguenos en Facebook
              </li>
              <li>
                {" "}
                <img className="icoIG" src={icoIG} />
                Sìguenos en Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Footer;
