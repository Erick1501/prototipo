import * as React from "react";
import { Pane, Button, Text, Heading } from "evergreen-ui";
import logo from "../images/logo-pro.png";
import { Link } from "gatsby";

const NavbarComponent = () => {
  return (
    <main>
      <Pane
        className="navbar"
        display="flex"
        padding={16}
        background="tint2"
        borderRadius={3}
      >
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>
            <Link to="/">
              <img className="logo" src={logo} />
            </Link>
          </Heading>
        </Pane>
        <Pane className="navigation">
          <Button appearance="minimal">
            <Link to="/voluntariado">Voluntariado</Link>
          </Button>
          <Button appearance="minimal">
            <Link to="/nosotros">Nosotros</Link>
          </Button>
          <Button appearance="minimal">
            <Link>Donación</Link>
          </Button>
          <Button appearance="minimal">
            <Link>Iniciar Secion</Link>
          </Button>
        </Pane>
      </Pane>
    </main>
  );
};
export default NavbarComponent;
