import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import { Form, Button } from "react-bootstrap";
import { Pane } from "evergreen-ui";
import { Link } from "gatsby";


const Login = () => {
  return (
    <main> 
      <NavbarComponent />
      <div >
        <Pane
          className="cont-log"
          elevation={0}
          width={500}
          height={500}
          margin={20}
          display="flex"
          justifyContent="center"
          alignItems="center"          
        >
          <div >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email"  />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password"  />
              </Form.Group>
              
              <Button variant="outline-primary" >
              <Link to="/administrador">Iniciar</Link>
              </Button>
            </Form>
          </div>
        </Pane>
      </div>
      <Footer />
    </main>
  );
};
export default Login;
