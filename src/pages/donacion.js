import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Pane, Text, TextInputField, Button, Autocomplete } from "evergreen-ui";

import Footer from "../components/Footer";
import imgdona from "../images/donacion.jpg";

const Donacion = () => {
  const [una_persona, cambiar_una_persona] = React.useState(true);
  const [sector, cambiar_sector] = React.useState();
  
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
              <Text size={400}>Personas Situación de Vulneravilidad</Text>
            </div>
            <div>
              <h1></h1>
            </div>
            <div>
              <Button onClick={() => cambiar_sector("sur")}>SUR</Button>
              <Button onClick={() => cambiar_sector("centro")}>CENTRO</Button>
              <Button onClick={() => cambiar_sector("norte")}>NORTE</Button>
            </div>
            {sector === "sur" ? (
              <div>
                <div>
                  <Autocomplete
                    title="Sector"
                    onChange={(changedItem) => console.log(changedItem)}
                    items={[
                      "San Bartolo",
                      "La Magdalena",
                      "La Mena 2",
                      "Villaflora",
                      "Solanda",
                      "Quitumbe",
                      "El Pintado",
                      "El Calzado",
                      "Chimbacalle",
                      "5 esquinas",
                      "Luluncoto",
                      "El Camal",
                      "Puengasí",
                      "La Ferroviaria",
                      "Santa Rita",
                      "Chillogallo",
                    ]}
                  >
                    {(props) => {
                      const { getInputProps, getRef, inputValue } = props;
                      return (
                        <TextInputField
                          validationMessage="Este campo es obligatorio"
                          width={400}
                          value={inputValue}
                          ref={getRef}
                          {...getInputProps()}
                          label="Sector"
                        />
                      );
                    }}
                  </Autocomplete>
                </div>
                <div>
                  <TextInputField
                    width={400}
                    validationMessage="Este campo es obligatorio"
                    label="Dirección Exacta"
                  />
                  <Text direccion="text-input-name" />
                </div>
                <div className="Serv-">
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
                      <TextInputField width={400} label="Número de Personas" />
                      <Text numeroPer="text-input-name" />
                    </div>
                    <div>
                      <TextInputField width={400} label="Descripción" />
                      <Text Descripcion="text-input-name" />
                    </div>
                  </div>
                )}
              </div>
            ) : sector === "centro" ? (
              <div>
                <div>
                <div>
                  <Autocomplete
                    title="Sector"
                    onChange={(changedItem) => console.log(changedItem)}
                    items={[
                      "Iñaquito",
                      "Centro Historico",
                      "Villaflora",
                      "Paramedico",
                      "Ingeniero",
                    ]}
                  >
                    {(props) => {
                      const { getInputProps, getRef, inputValue } = props;
                      return (
                        <TextInputField
                          validationMessage="Este campo es obligatorio"
                          width={400}
                          value={inputValue}
                          ref={getRef}
                          {...getInputProps()}
                          label="Sector"
                        />
                      );
                    }}
                  </Autocomplete>
                </div>
                <div>
                  <TextInputField
                    width={400}
                    validationMessage="Este campo es obligatorio"
                    label="Dirección Exacta *Obligatorio"
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
                      <TextInputField width={400} label="Número de Personas" />
                      <Text numeroPer="text-input-name" />
                    </div>
                    <div>
                      <TextInputField width={400} label="Descripción" />
                      <Text Descripcion="text-input-name" />
                    </div>
                  </div>
                )}
              </div>
              </div>
            ) : sector === "norte" ? (
              <div>
                <div>
                <div>
                  <Autocomplete
                    title="Sector"
                    onChange={(changedItem) => console.log(changedItem)}
                    items={[
                      "Iñaquito",
                      "Centro Historico",
                      "Villaflora",
                      "Paramedico",
                      "Ingeniero",
                    ]}
                  >
                    {(props) => {
                      const { getInputProps, getRef, inputValue } = props;
                      return (
                        <TextInputField
                          validationMessage="Este campo es obligatorio"
                          width={400}
                          value={inputValue}
                          ref={getRef}
                          {...getInputProps()}
                          label="Sector"
                        />
                      );
                    }}
                  </Autocomplete>
                </div>
                <div>
                  <TextInputField
                    width={400}
                    validationMessage="Este campo es obligatorio"
                    label="Dirección Exacta *Obligatorio"
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
                      <TextInputField width={400} label="Número de Personas" />
                      <Text numeroPer="text-input-name" />
                    </div>
                    <div>
                      <TextInputField width={400} label="Descripción" />
                      <Text Descripcion="text-input-name" />
                    </div>
                  </div>
                )}
              </div>
              </div>
            ) : null}

            <div>
              <Button appearance="primary" className="boton-ayuda">
                Enviar
              </Button>
            </div>
          </Pane>
        </Pane>
      </div>
      <Footer />
    </main>
  );
};
export default Donacion;
