import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import "../bootstrap";
import { Button, Card } from "react-bootstrap";
import juan23 from "../images/Captura.jpg";
import GJSDA from "../images/GJSDA.jpg";
import emaus from "../images/emaus.jpg";
import orden from "../images/orden.jpg";
import mapa from "..//images/mapa.jpg";
import iglesia from "../images/iglesia.jpg";
import mision from "../images/mision.jpg";
import vision from "../images/vision.jpg";
import noticia from "../images/noricia1.jpg";


import Mapa from "../components/mapa";
//import credenciales from "../components/credenciales";

const nosotros = () => {
  //const mapURL = 'https://maps.googleapis.com/maps/api/js?v=9.exp&Key=${credenciales.mapsKey}';
 
  return (
    <main>
      <NavbarComponent />
      <div className="container">
        <div className="container">
          <div className="titulo_nosotros">
            <h1>Nosotros</h1>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <p className="texto-nosotros">
                "CARITAS DEI" Es una obra social de la Iglesia que busca ayudar
                a los más pobres, especialmente con la alimentación y el
                vestido. Nació en el siglo XIII por la devoción al santo del
                mismo nombre. Pues este era muy caritativo con los pobres y
                cuenta una leyenda que un día ofreció todo el pan de su
                convento; al rato, cuando sus hermanos del convento reclamaban
                por el pan que había regalado, les dijo que revisaran bien la
                cesta, y efectivamente la cesta estaba llena lo que antes estaba
                vacía. Nuestra pastoral, en el convento de la recoleta de san
                Diego de Quito, nació en el 2016 de la mano de los hermanos José
                Gaibor e Ismaél Márquez. Y a lo largo de estos tiempos han
                estado al frente algunos hermanos franciscanos.
              </p>
            </div>
            <div className="col-sm-6">
              <img className="nos_img" src={iglesia} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="titulo_nosotros">
            <h1>Misión</h1>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <img className="mision_img" src={mision} />
            </div>
            <div className="col-sm-6">
              <p className="texto-mision">
                Llevar la misericordia de Dios por medio de alimentos y vestido
                a los más necesitados y marginados. Ello desde la espiritualidad
                de nuestro padre san Francisco de Asís y el ejemplo de nuestro
                patrono san Antonio de Padua.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="titulo_nosotros">
            <h1>Visión</h1>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <p className="texto-vision">
                Servir cada vez de mejor manera, crecer como personas. Ello con
                formación permanente de quienes conformamos la pastoral en la
                espiritualidad franciscana y el evangelio de Nuestro Señor
                Jesucristo.
              </p>
            </div>
            <div className="col-sm-6">
              <img className="vision_img" src={vision} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="titulo_nosotros">Integrantes</h1>
        <div className="row">
          <div className="col-sm-6">
            <Card>
              <Card.Img className="card" variant="top" src={juan23} />
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
            <Card className="card">
              <Card.Img variant="top" src={GJSDA} />
              <Card.Body>
                <Card.Title>Grupo Juvenil</Card.Title>
                <Card.Text>
                  Grupo conformado por jovenes de la parroquia la cual està
                  dispuesta a servirle a Dios
                </Card.Text>
                <Button variant="primary">visitar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card>
              <Card.Img className="card" variant="top" src={emaus} />
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
              <Card.Img className="card" variant="top" src={orden} />
              <Card.Body>
                <Card.Title>Orden de Frailes Menores</Card.Title>
                <Card.Text>
                  La Orden de los Hermanos Menores, fundada por San Francisco de
                  Asís, es una Fraternidad. Los Hermanos, llevando a una mayor
                  plenitud la consagración bautismal y respondiendo a la llamada
                  divina
                </Card.Text>
                <Button variant="primary">Visitar</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="titulo_nosotros">
        <h1>ESTAMOS UBICADOS </h1>
          
        <div>
          <Mapa/>
        </div>
      </div>
      <div className="titulo_nosotros">
        <h1>NOTICIAS</h1>
        <div className="noticias">
          <div className="row">
            <div className="col-sm-6">
              <p className="texto-nosotros">
                Fiesta de San Antonio de Padua, desde la Recoleta de San Diego
                de Quito. 800 Años del Encuentro de San Francisco y San Antonio
                en 1221. En la fiesta de Pentecostés de 1221 Antonio participó
                junto con unos 3000 frailes del Capítulo general de Asís, el más
                multitudinario de los llamados Capítulos de las esteras, nombre
                que recibió en razón de que muchos de los frailes ahí reunidos
                tuvieron que dormir en esteras. Allí vio y escuchó en persona a
                san Francisco. Una vez concluida la reunión, Antonio solicitó a
                fray Graziano, provincial de Romaña, que lo tomara consigo para
                que le impartiese los primeros rudimentos de la fe espiritual
                (Assidua 7, 2-3). Fray Graziano lo envió a una pequeña ermita en
                las montañas del pueblo de Montepaolo para que sirviera como
                sacerdote. La convicción, cultura y talento de Antonio como
                predicador se mostraron por primera vez en Forlì en 1222. Pronto
                se divulgó la noticia de la calidad de sus sermones, y Antonio
                recibió una carta del propio san Francisco con el encargo de
                predicar y de enseñar Teología a los frailes. Luego, fue
                comisionado por el mismo Francisco para luchar contra la
                propagación de la herejía cátara en Francia. Se trasladó más
                tarde a Bolonia y a Padua, por lo que su tarea como predicador
                lo transformó en un viajero asiduo por el sur de Francia y todo
                el norte de Italia.
              </p>
            </div>
            <div className="col-sm-6">
              <img width={400} height={400} src={noticia} />
            </div>
          </div>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default nosotros;
