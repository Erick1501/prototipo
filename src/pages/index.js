import * as React from "react";
import { Pane, Button, Text, Heading } from "evergreen-ui";
import logo from "../images/logo-pro.png";
import { Router } from "@reach/router";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import background from "../images/pexels-pixabay-45842.jpg";
import icoayuda from "../images/amor.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarrImg1 from "../images/img1.jpg"
import CarrImg2 from "../images/img2.jpg"
import CarrImg3 from "../images/img3.jpg"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};
// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#000000",
  },
];

// markup
const IndexPage = () => {
  const IconoAyuda = <img className="IcoAyu" src={icoayuda} />;
  return (
    <main>
      <NavbarComponent />
      <div className="back">
        <div className="background-text">
          CARITAS DEI
          <div className="eslogan">
            Ayudemos a las personas que más lo necesitan
          </div>
          <div>
            <Button
              iconBefore={IconoAyuda}
              appearance="primary"
              className="boton-ayuda"
            >
              Ayuda
            </Button>
          </div>
        </div>
        <img className="background" src={background} />
      </div>
      <div className="Servicio">
        <div className="titu-serv">Servicio</div>
        <Pane className="ServPANe" clearfix>
          <Pane
            elevation={1}
            backgroundColor="#DDEBF8"
            width="45%"
            height={320}
            margin={24}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text className="titu-ser"> Alimentacion</Text>
            <Text size={600} padding={30}>Se preparan todos los alimentos donados. .</Text>
          </Pane>
          <Pane
            elevation={1}
            backgroundColor="#DDEBF8"
            width="45%"
            height={320}
            margin={24}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text className="titu-ser">Entrega de Alimentos</Text>
            <Text size={600} padding={30}>
              Se hace un recorrido sobre las calles entregando los alimentos.
            </Text>
          </Pane>
        </Pane>
      </div>
      <card-nosot />
      <Carousel className="carrusel" showThumbs={false} >
        <div>
          <img height={500} src={CarrImg1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img height={500} src={CarrImg2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img height={500} src={CarrImg3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <Footer />
    </main>
  );
};

export default IndexPage;
