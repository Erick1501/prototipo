import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import {
  Pane,
  Text,
  TextInputField,
  Button,
  Autocomplete,
  Combobox,
} from "evergreen-ui";

import Footer from "../components/Footer";
import imgdona from "../images/donacion.jpg";

const Donacion = () => {
  const [zona, cambiar_zona] = React.useState();
  const [sur_data, cambiar_sur_data] = React.useState({
    sector: "",
    direccion: "",
    personas: "",
    descripcion: "",
  });
  const [centro_data, cambiar_centro_data] = React.useState({
    sector: "",
    direccion: "",
    personas: "",
    descripcion: "",
  });
  const [norte_data, cambiar_norte_data] = React.useState({
    sector: "",
    direccion: "",
    personas: "",
    descripcion: "",
  });
  const enviarZona = () => {
    let endpoint = "";
    let body = {};
    if (zona === "sur") {
      endpoint = "/sector-surs";
      body = sur_data;
    } else if (zona === "centro") {
      endpoint = "/sector-centros";
      body = centro_data;
    } else if (zona === "norte") {
      endpoint = "/sector-nortes";
      body = norte_data;
    }
    fetch(`http://localhost:1337${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        window.alert("gracias");
      })
      .catch((error) => window.alert(error));
  };

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
              <Button onClick={() => cambiar_zona("sur")}>SUR</Button>
              <Button onClick={() => cambiar_zona("centro")}>CENTRO</Button>
              <Button onClick={() => cambiar_zona("norte")}>NORTE</Button>
            </div>
            {zona === "sur" ? (
              <div>
                <div>
                  <Combobox
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
                    
                    onChange={(selected) =>
                      cambiar_sur_data({
                        ...sur_data,
                        sector: selected,
                      })
                    }
                    className="m-b"
                    width={400}                   
                    placeholder="Elige el sector..."
                    autocompleteProps={{
                      title: "sector",
                    }}
                    
                    label="Sector"
                  />
                </div>
                <div>
                  <TextInputField
                    onChange={(e) =>
                      cambiar_sur_data({
                        ...sur_data,
                        direccion: e.target.value,
                      })
                    }
                    width={400}
                    validationMessage="Este campo es obligatorio"
                    label="Dirección Exacta"
                  />
                  <Text direccion="text-input-name" />
                </div>
                <div>
                  <div>
                    <TextInputField
                      onChange={(e) =>
                        cambiar_sur_data({
                          ...sur_data,
                          personas: e.target.value,
                        })
                      }
                      width={400}
                      label="Número de Personas"
                    />
                    <Text numeroPer="text-input-name" />
                  </div>
                  <div>
                    <TextInputField
                      onChange={(e) =>
                        cambiar_sur_data({
                          ...sur_data,
                          descripcion: e.target.value,
                        })
                      }
                      width={400}
                      label="Descripción"
                    />
                    <Text Descripcion="text-input-name" />
                  </div>
                </div>
              </div>
            ) : zona === "centro" ? (
              <div>
                <div>
                  <div>
                    <Combobox
                      items={[
                        "Centro Histórico",
                        "La Tola",
                        "San Roque",
                        "La Ronda",
                        "La Marín",
                        "San Marcos",
                        "El Tejar ",
                        "Toctiuco",
                        "Miraflores",
                        "San Juan",
                        "San Diego",
                        "El Panecillo",
                        "El Ejido",
                        "La Floresta ",
                      ]}
                      onChange={(selected) =>
                        cambiar_centro_data({
                          ...centro_data,
                          sector: selected,
                        })
                      }
                      className="m-b"
                      width={400}
                      placeholder="Elige el sector..."
                      autocompleteProps={{
                        title: "sector",
                      }}
                      label="Sector"
                    />
                  </div>
                  <div>
                    <TextInputField
                      onChange={(e) =>
                        cambiar_centro_data({
                          ...centro_data,
                          direccion: e.target.value,
                        })
                      }
                      width={400}
                      validationMessage="Este campo es obligatorio"
                      label="Dirección Exacta"
                    />
                    <Text direccion="text-input-name" />
                  </div>
                  <div>
                    <div>
                      <TextInputField
                        onChange={(e) =>
                          cambiar_centro_data({
                            ...centro_data,
                            personas: e.target.value,
                          })
                        }
                        width={400}
                        label="Número de Personas"
                      />
                      <Text numeroPer="text-input-name" />
                    </div>
                    <div>
                      <TextInputField
                        onChange={(e) =>
                          cambiar_centro_data({
                            ...centro_data,
                            descripcion: e.target.value,
                          })
                        }
                        width={400}
                        label="Descripción"
                      />
                      <Text Descripcion="text-input-name" />
                    </div>
                  </div>
                </div>
              </div>
            ) : zona === "norte" ? (
              <div>
                <div>
                  <div>
                    <Combobox
                      items={[
                        "La Mariscal",
                        "El Batán",
                        "Las Casas",
                        "Bellavista",
                        "Guápulo",
                        "Iñaquito",
                        "Quito Tennis",
                        "Atucucho",
                        "La Florida",
                        "San Carlos",
                        "Cotocollao",
                        "Comité del Pueblo",
                        "La Bota",
                        "Ponceano",
                        "El Condado",
                        "Kennedy",
                      ]}
                      onChange={(selected) =>
                        cambiar_norte_data({
                          ...norte_data,
                          sector: selected,
                        })
                      }
                      className="m-b"
                      width={400}
                      placeholder="Elige el sector..."
                      autocompleteProps={{
                        title: "sector",
                      }}
                      label="Sector"
                    />
                  </div>
                  <div>
                    <TextInputField
                      onChange={(e) =>
                        cambiar_norte_data({
                          ...norte_data,
                          direccion: e.target.value,
                        })
                      }
                      width={400}
                      validationMessage="Este campo es obligatorio"
                      label="Dirección Exacta"
                    />
                    <Text direccion="text-input-name" />
                  </div>
                  <div>
                    <div>
                      <TextInputField
                        onChange={(e) =>
                          cambiar_norte_data({
                            ...norte_data,
                            personas: e.target.value,
                          })
                        }
                        width={400}
                        label="Número de Personas"
                      />
                      <Text numeroPer="text-input-name" />
                    </div>
                    <div>
                      <TextInputField
                        onChange={(e) =>
                          cambiar_norte_data({
                            ...norte_data,
                            descripcion: e.target.value,
                          })
                        }
                        width={400}
                        label="Descripción"
                      />
                      <Text Descripcion="text-input-name" />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div>
              <Button
                onClick={enviarZona}
                appearance="primary"
                className="boton-ayuda"
              >
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
