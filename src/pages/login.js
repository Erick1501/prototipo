import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import { Form, Button } from "react-bootstrap";
import { Pane, Dialog, TextInput } from "evergreen-ui";
import { Link } from "gatsby";

const Login = () => {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <main>
      <NavbarComponent />
      <div>
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
          <div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" />
              </Form.Group>          
              <Button variant="outline-primary">
                <Link to="/administrador">Iniciar</Link>
              </Button>
            </Form>
            <div></div>
            <div>         
                <Pane>
                  <Dialog
                    isShown={isShown}
                    title="Recuperar contraseña"
                    onCloseComplete={() => setIsShown(false)}
                    confirmLabel="Enviar"
                  >
                     <div>Su clave será enviada al correo electrónico</div>
                    
                    <TextInput  />
                  </Dialog>
                  <h1></h1>
                  <Button onClick={() => setIsShown(true)} variant="outline-primary" >¿Olvido su contraseña?</Button>
                </Pane>              
              </div>
          </div>
        </Pane>
      </div>
      <Footer />
    </main>
  );
};
export default Login;
