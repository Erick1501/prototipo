import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import {
  Pane,
  Text,
  TextInputField,
  Button,
 
} from "evergreen-ui";

import Footer from "../components/Footer";
import imgdona from "../images/donacion.jpg";

const Donacion = () => {
  const [una_persona, cambiar_una_persona] = React.useState(true);
  
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
              <Text size={400}>Personas Situacion de Vulneravilidad</Text>
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
              <Button
                onClick={() => cambiar_una_persona(true)}
                variant="outline-secondary"
                className={`${una_persona ? "active" : ""} boton`}
              >
                Una Persona
              </Button>
              <Button
                onClick={() => cambiar_una_persona(false)}
                variant="outline-secondary"
                className={`${!una_persona ? "active" : ""} boton`}
              >
                Grupo de personas
              </Button>
            </div>
            {una_persona ? (
              <div>
                <div>
                  <TextInputField width={400} label="Sexo" />
                  <Text sexo="text-input-name" />
                </div>

                <div>
                  <TextInputField width={400} label="Descripción" />
                  <Text Descripcion="text-input-name" />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <TextInputField width={400} label="Numero de Personas" />
                  <Text numeroPer="text-input-name" />
                </div>
                <div>
                  <TextInputField width={400} label="Descripcion" />
                  <Text Descripcion="text-input-name" />
                </div>
              </div>
            )}

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
export default Donacion;
