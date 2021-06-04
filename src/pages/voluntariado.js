import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import {
  Pane,
  Textarea,
  Text,
  TextInputField,
  Button,
  Autocomplete,
} from "evergreen-ui";

import Footer from "../components/Footer";
import imgvol from "../images/voluntariado.jpg";

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
            width={550}
            height={720}
            margin={24}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <div className="titu-form">
              <Text size={500}>Registro de Voluntarios</Text>
            </div>
            <div>
              <TextInputField width={400} label="Nombres" />
              <Text nombre="text-input-name" />
            </div>
            <div>
              <TextInputField width={400} label="Apellidos" />
              <Text apellido="text-input-lastname" />
            </div>
            <div>
              <TextInputField width={400} label="Correo Electronico" />
              <Text correo="text-input-email" />
            </div>
            <div>
              <TextInputField width={400} label="Cedula" />
              <Text cedula="text-input-cedula" />
            </div>
            <div>
              <TextInputField width={400} label="Nùmero Celular" />
              <Text celular="text-input-numero" />
            </div>
            <div>
              <Autocomplete
                title="profesion"
                onChange={(changedItem) => console.log(changedItem)}
                items={["Doctor", "Enfermero", "psicologo", "Paramedico", "Ingeniero"]}
              >
                {(props) => {
                  const { getInputProps, getRef, inputValue } = props;
                  return (
                    <TextInputField
                      width={400}
                      value={inputValue}
                      ref={getRef}
                      {...getInputProps()}
                      label="Profesión"
                    />
                  );
                }}
              </Autocomplete>
            </div>
            
            <Button appearance="primary" className="boton-ayuda">
              Enviar
            </Button>
          </Pane>

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
            flexDirection="column"
          >
            <img className="imgvol" src={imgvol} />
          </Pane>
        </Pane>
      </div>
      <Footer />
    </main>
  );
};
export default Voluntariado;
