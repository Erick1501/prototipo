import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import {} from "react-bootstrap";
import { Button, Select, Pane } from "evergreen-ui";

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
          Voluntarios
        </Button>
        <Button
          onClick={() => cambiar_nav_admin("solicitudes")}
          margin={16}
          variant="minimal"
        >
          Solicitudes
        </Button>
        <Button
          onClick={() => cambiar_nav_admin("donaciones")}
          margin={16}
          variant="minimal"
        >
          Donaciones
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
          <Pane
            className=""
            elevation={0}
            float="center"
            width={500}
            height={550}
            margin={20}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          ><h1>hola</h1></Pane>
        </div>
      ) : nav_admin === "solicitudes" ? (
        <div><h1>1</h1></div>
      ) : nav_admin === "donaciones" ? (
        <div><h1>2</h1></div>
      ) : nav_admin === "psv" ? (
        <div><h1>3</h1></div>
      ) : null}

    </main>
  );
};
export default Login;
