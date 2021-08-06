import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import { Form, Button,  } from "react-bootstrap";
import { Pane, Dialog, TextInput, TextInputField } from "evergreen-ui";
//import { Link } from "gatsby";
import axios from "axios";
import { navigate } from "@reach/router"  

const Login = () => {
  const [isShown, setIsShown] = React.useState(false);

const[login_data, cambiar_login_data] = React.useState({
  email:"",
  password:"",
});
console.log(login_data)

const login = () => {
axios
  .post('http://localhost:1337/auth/local', {
    identifier: login_data.email,
    password: login_data.password,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    navigate(`/administrador/`) 
  })
  .catch(error => {
    // Handle error.
    window.alert("Error al iniciar sesión, email o contraseña incorrectos")
    console.log('An error occurred:', error.response);
  });
}

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
                <TextInputField
                  onChange={(e) =>
                    cambiar_login_data({ ...login_data, email: e.target.value })
                  }
                  width={400}
                  label="Correo"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <TextInputField
                  onChange={(e) =>
                    cambiar_login_data({ ...login_data, password: e.target.value })
                  }
                  width={400}
                  label="Contraseña"
                  type="password"
                />
              </Form.Group>
              <Button variant="outline-primary" onClick={login}>
                Iniciar
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

                  <TextInput />
                </Dialog>
                <h1></h1>
                <Button
                  onClick={() => setIsShown(true)}
                  variant="outline-primary"
                >
                  ¿Olvido su contraseña?
                </Button>
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
