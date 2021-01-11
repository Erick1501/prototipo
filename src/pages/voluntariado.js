import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Pane, TextInput, Text, TextInputField, Button } from "evergreen-ui";
import voluntario from "../images/voluntariado.jpg"
import Footer from "../components/Footer";

const Voluntariado = () => {
  return (
    <main>
      <NavbarComponent />
      <div className="cont-Volu">
        <Pane clearfix>
          <Pane
            className="form-vol"
            elevation={1}
            float="left"
            backgroundColor="white"
            width={600}
            height={620}
            margin={24}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div>
              <Text size={400}>Registro de Voluntarios</Text>
            </div>
            <div>
              <TextInputField label="Nombres" />
              <Text nombre="text-input-name" />
            </div>
            <div>
              <TextInputField label="Apellidos" />
              <Text apellido="text-input-name" />
            </div>
            <div>
              <TextInputField label="Correo Electronico" />
              <Text correo="text-input-name" />
            </div>
            <div>
              <TextInputField label="Profecciòn" />
              <Text profeccion="text-input-name" />
            </div>
            <div>
              <TextInputField label="Cedula" />
              <Text cedula="text-input-name" />
            </div>
            <div>
              <TextInputField label="Celular" />
              <Text celular="text-input-name" />
            </div>
            <Button              
              appearance="primary"
              className="boton-ayuda"
            >
              Enviar
            </Button>
          </Pane>

          <Pane
            className="img-form"
            elevation={1}
            float="left"
            width={600}
            height={620}
            margin={24}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
         
          </Pane>
        </Pane>
      </div>
      <Footer />
    </main>
  );
};
export default Voluntariado;
