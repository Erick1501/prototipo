import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import "../bootstrap";
import { Button, Card } from "react-bootstrap";
import juan23 from "../images/Captura.jpg";
import GJSDA from "../images/GJSDA.jpg";
import emaus from "../images/emaus.jpg";
import orden from "../images/orden.jpg";

const nosotros = () => {
  return (
    <main>
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Sobre Nosotros</h1>
            <p>
              Somos una pastoral social que se encarga de ayudar a las personas
              en situacion de vulneravilidad las cuales viven en las calles nos
              encargamos de recorrer las calles en las noches en busca de
              personas vulnerables y asi poder ayudarlos
            </p>
          </div>
          <div className="col-sm-12">
            <h1>Mision</h1>
            <p>asdasd
            </p>
          </div>
          <div className="col-sm-12">
            <h1>Vision</h1>
            <p>
              asdasd
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Integrantes</h1>
        <div className="row">
          <div className="col-sm-6">
            <Card>
              <Card.Img variant="top" src={juan23} />
              <Card.Body>
                <Card.Title> Movimiento Juan XXIII</Card.Title>
                <Card.Text>
                  Consideramos que nuestra misión es extender el Reino de Dios y
                  buscamos ayudar a cada miembro a encontrar su lugar
                </Card.Text>
                <Button variant="primary">Visitar </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card>
              <Card.Img variant="top" src={GJSDA} />
              <Card.Body>
                <Card.Title>Grupo Juvenil</Card.Title>
                <Card.Text>grupo de jovenes para servirle a Dios</Card.Text>
                <Button variant="primary">visitar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card>
              <Card.Img variant="top" src={emaus} />
              <Card.Body>
                <Card.Title> Emaus </Card.Title>
                <Card.Text>
                  Que es EMAUS? Es la experiencia más sencilla, personal,
                  digerible pero PODEROSA directamente con el Amor de DIOS. Así
                  de simple!!! Acá estamos
                </Card.Text>
                <Button variant="primary">Visitar </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card>
              <Card.Img variant="top" src={orden} />
              <Card.Body>
                <Card.Title>Orden de Frailes Menores</Card.Title>
                <Card.Text>
                  Es la rama más numerosa de la Primera Orden de San Francisco.
                </Card.Text>
                <Button variant="primary">Visitar</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};
export default nosotros;
