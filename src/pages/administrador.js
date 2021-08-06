import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Table, InputGroup, Text, Container, Row, Col } from "react-bootstrap";
import {Button,} from "evergreen-ui";

import TablaSoli from "./tablaSoli";
import TablaVolun from "./tablaVolun";
import TablaDona from "./tablaDona";
import TablaPSV from "./tablaPSV";

const Login = () => {
  const [nav_admin, cambiar_nav_admin] = React.useState("");
  
  return (
    <main>
      <NavbarComponent />
      <div className="nav-admin">
        <Button
          onClick={() => cambiar_nav_admin("voluntarios")}
          margin={16}
          variant="minimal"
        >
          VOLUNTARIOS
        </Button>
        
        <Button
          onClick={() => cambiar_nav_admin("donaciones")}
          margin={16}
          variant="minimal"
        >
          DONACIONES
        </Button>
        <Button
          onClick={() => cambiar_nav_admin("psv")}
          margin={16}
          variant="minimal"
        >
          PSV
        </Button>
      </div>
      {nav_admin === "voluntarios" ? (
        <div>
          <TablaVolun />
        </div>
      ) : nav_admin === "solicitudes" ? (
        <div>
          <TablaSoli />
        </div>
      ) : nav_admin === "donaciones" ? (
        <div>
          <TablaDona />
        </div>
      ) : nav_admin === "psv" ? (
        <div>
          <TablaPSV />
        </div>
      ) : null}
    </main>
  );
};
export default Login;
