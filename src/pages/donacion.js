import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Pane, Text, TextInputField, Button, Checkbox } from "evergreen-ui";

import Footer from "../components/Footer";
import imgdona from "../images/donacion.jpg";

const donacion = () => {
  return (
    <main>
      <NavbarComponent />
      <div className="cont-don">
        <Pane clearfix>
          <Pane
            className="img-form"
            elevation={1}
            float="left"
            width={550}
            height={620}
            margin={24}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="columnS"
          >
            <img className="imgvol" src={imgdona} />
          </Pane>

          <Pane
            className="form-vol"
            elevation={1}
            float="left"
            backgroundColor="white"
            width={570}
            height={620}
            margin={24}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div>
              <Text size={400}>Personas Situacion de vulneravilidad</Text>
            </div>
            <div>
              <TextInputField
                width={400}
                validationMessage="This field is required"
                label="Sector"
              />
              <Text sector="text-input-name" />
            </div>
            <div>
              <TextInputField
                width={400}
                validationMessage="This field is required"
                label="Direcion Exacta *Obligatorio"
              />
              <Text direccion="text-input-name" />
            </div>
            <div>
              <Button variant="outline-secondary">Una Persona</Button>
              <Button variant="outline-secondary">Grupo de personas</Button>
            </div>
            <div>
              <TextInputField width={400} label="sexo" />
              <Text sexo="text-input-name" />
            </div>
            
            <div>
              <TextInputField width={400} label="Descripcion" />
              <Text Descripcion="text-input-name" />
            </div>
            <div>
              <TextInputField width={400} label="Celular" />
              <Text celular="text-input-name" />
            </div>
            <Button appearance="primary" className="boton-ayuda">
              Enviar
            </Button>
          </Pane>
        </Pane>
      </div>
      <Footer />
    </main>
  );
};
export default donacion;
