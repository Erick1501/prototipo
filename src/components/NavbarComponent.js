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
        padding={19}
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
            <Link to="/voluntariado">VOLUNTARIADO</Link>
          </Button>
          <Button appearance="minimal">
            <Link to="/nosotros">NOSOTROS</Link>
          </Button>
          <Button appearance="minimal">
            <Link to="/donacion">AYUDA</Link>
          </Button>
          <Button appearance="minimal">
            <Link to="/donaciones">DONACION</Link>
          </Button>
          <Button appearance="minimal">
            <Link to="/login">LOGIN</Link>
          </Button>
        </Pane>
      </Pane>
    </main>
  );
};
export default NavbarComponent;
