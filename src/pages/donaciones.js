import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import {
  Pane,
  Text,
  TextInputField,
  Button,
  Textarea,
  Autocomplete,
  Tooltip,
  FilePicker,
  Combobox,
  Label,
} from "evergreen-ui";
import { Form } from "react-bootstrap";
import Footer from "../components/Footer";

const Donaciones = () => {
  const [validacion_formu, cambiar_validacion_formu] = React.useState(true);
  const [tipo_donaciones, cambiar_tipo_donaciones] = React.useState("");
  // const [tipo_alimentos, cambiar_tipo_alimentos] = React.useState("");
  const [boton_donacion, cambiar_boton_donacion] = React.useState("");
  //const [genero_ropa, cambiar_genero_ropa] = React.useState("");
  //const [talla_ropa, cambiar_talla_ropa] = React.useState("");
  const [validar_donacion, cambiar_validacion_donacion] = React.useState("");
  console.log(donacion_data);
  const [donacion_data, cambiar_donacion_data] = React.useState({
    cantidad: "",
    baucher: "",
  });
  const [ropa_data, cambiar_ropa_data] = React.useState({
    genero: "",
    tipo: "",
    talla: "",
    cantidad: "",
  });
  const [juguetes_data, cambiar_juguetes_data] = React.useState({
    genero: "",
    descripcion: "",
  });
  const [alimentos_data, cambiar_alimentos_data] = React.useState({
    tipo: "",
    tipo2: "",
    descripcion: "",
  });
  const [formulario_data, cambiar_formulario_data] = React.useState({
    Nombre: "",
    Apellido: "",
    correo: "",
    numero: "",
  });
  console.log(formulario_data);
  const enviarformulario = () => {
    fetch("http://localhost:1337/registro-donantes", {
      method: "POST",
      body: JSON.stringify(formulario_data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        window.alert("gracias");
      })
      .catch((error) => window.alert(error));
  };

  const enviarDonacion = () => {
    let endpoint = "";
    let body = {};
    if (tipo_donaciones === "ropa") {
      endpoint = "/articulos-ropas";
      body = ropa_data;
    } else if (tipo_donaciones === "alimentos") {
      endpoint = "/articulos-alimentos";
      body = alimentos_data;
    } else if (tipo_donaciones === "juguetes") {
      endpoint = "/articulo-juguetes";
      body = juguetes_data;
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

  const enviardonmonetaria = () => {
    fetch("http://localhost:1337/donacion-monetarias", {
      method: "POST",
      body: JSON.stringify(donacion_data),
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
      <Pane
        className="Donacion-registro"
        elevation={0}
        float="center"
        backgroundColor="white"
        width={1150}
        height={520}
        margin={40}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <div className="inf-don">
          <div>
            <h1>Donaciones</h1>
            <h5>Todas las donaciones se nececita su previo registro</h5>
          </div>
          <div>
            <Form.Group>
              <TextInputField
                width={400}
                label="Nombres"
                onChange={(e) =>
                  cambiar_formulario_data({
                    ...formulario_data,
                    Nombre: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <TextInputField
                width={400}
                label="Apellidos"
                onChange={(e) =>
                  cambiar_formulario_data({
                    ...formulario_data,
                    Apellido: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <TextInputField
                width={400}
                label="Correo Electrónico"
                onChange={(e) =>
                  cambiar_formulario_data({
                    ...formulario_data,
                    correo: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <TextInputField
                width={400}
                label="Número de teléfono"
                onChange={(e) =>
                  cambiar_formulario_data({
                    ...formulario_data,
                    numero: e.target.value,
                  })
                }
              />
            </Form.Group>
          </div>

          <Button
            onClick={() => {
              enviarformulario();
              cambiar_validacion_formu("");
            }}
            appearance="primary"
            className="boton-ayuda"
          >
            Enviar
          </Button>
        </div>
      </Pane>
      {validacion_formu ? (
        <div alignItems="center">
          <div className="Servicio">
            <h1>Llenar el formulario de forma obligatoria</h1>
          </div>
        </div>
      ) : (
        <div>
          <Pane clearfix>
            <div className="Servicio">
              <Button onClick={() => cambiar_boton_donacion("articulos")}>
                Articulos
              </Button>
              <Button onClick={() => cambiar_boton_donacion("monetario")}>
                Monetario
              </Button>
            </div>
            <h1></h1>
            {boton_donacion === "articulos" ? (
              <div>
                <Pane
                  className="articulos1"
                  elevation={1}
                  float="left"
                  backgroundColor="white"
                  width={1150}
                  height={620}
                  margin={40}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <div>
                    <Text size={400}>Articulos</Text>
                  </div>
                  <div>
                    <Button
                      onClick={() => cambiar_tipo_donaciones("ropa")}
                      width={150}
                      className={`${tipo_donaciones ? "active2" : ""} boton2`}
                    >
                      Ropa
                    </Button>
                    <Button
                      onClick={() => cambiar_tipo_donaciones("alimentos")}
                      width={150}
                      className={`${tipo_donaciones ? "active2" : ""} boton2`}
                    >
                      Alimentos
                    </Button>
                    <Button
                      onClick={() => cambiar_tipo_donaciones("juguetes")}
                      width={150}
                      className={`${tipo_donaciones ? "active2" : ""} boton2`}
                    >
                      Juguetes
                    </Button>
                  </div>
                  {tipo_donaciones === "ropa" ? (
                    <div>
                      <div className="Ropa">
                        <div className="p-t">
                          <Label marginBottom={4} display="block">
                            Género
                          </Label>
                          <Combobox
                            items={["Hombre", "Mujer"]}
                            onChange={(selected) =>
                              cambiar_ropa_data({
                                ...ropa_data,
                                genero: selected,
                              })
                            }
                            className="m-b"
                            width={400}
                            placeholder="Elige tu género..."
                            autocompleteProps={{
                              title: "Género",
                            }}
                            label="Género"
                          />
                        </div>
                        <Label marginBottom={4} display="block">
                          Tipo de ropa
                        </Label>
                        <Combobox
                          items={["Camiseta", "Pantalón", "Chompa", "Zapatos"]}
                          onChange={(selected) =>
                            cambiar_ropa_data({ ...ropa_data, tipo: selected })
                          }
                          className="m-b"
                          width={400}
                          placeholder="Elige el tipo de ropa..."
                          autocompleteProps={{
                            title: "Tipo de ropa",
                          }}
                          label="Tipo de ropa"
                        />
                        <Text width={400}> </Text>
                        <Label marginBottom={4} display="block">
                          Talla de la ropa
                        </Label>
                        <Combobox
                          items={[
                            "S - (36)",
                            "M - (38)",
                            "L - (40)",
                            "XL - (42)",
                          ]}
                          onChange={(selected) =>
                            cambiar_ropa_data({ ...ropa_data, talla: selected })
                          }
                          marginBottom="15px"
                          width={400}
                          placeholder="Elige la talla de la ropa..."
                          autocompleteProps={{
                            title: "Talla de la ropa",
                          }}
                          label="Talla de la ropa"
                        />
                        <TextInputField
                          onChange={(e) =>
                            cambiar_ropa_data({
                              ...ropa_data,
                              cantidad: e.target.value,
                            })
                          }
                          width={400}
                          label="Cantidad de la ropa"
                          type="number"
                        />
                      </div>
                    </div>
                  ) : tipo_donaciones === "alimentos" ? (
                    <div>
                      <div className="Alimetos">
                        <div>
                          <Label
                            marginBottom={4}
                            marginTop={15}
                            display="block"
                          >
                            Tipo de alimento
                          </Label>
                          <Combobox
                            items={[
                              "No perecederos",
                              "Semi perecederos",
                              "Perecederos",
                            ]}
                            onChange={(selected) =>
                              cambiar_alimentos_data({
                                ...alimentos_data,
                                tipo: selected,
                              })
                            }
                            className="m-b"
                            width={400}
                            placeholder="Elija el tipo de alimento..."
                            autocompleteProps={{
                              title: "Tipo de alimento",
                            }}
                          />
                        </div>
                        {alimentos_data.tipo === "No perecederos" ? (
                          <div>
                            <Label marginBottom={4} display="block">
                              Tipo de alimento no perecedero
                            </Label>
                            <Combobox
                              items={["Enlatados", "Secos"]}
                              onChange={(selected) =>
                                cambiar_alimentos_data({
                                  ...alimentos_data,
                                  tipo2: selected,
                                })
                              }
                              className="m-b"
                              width={400}
                              placeholder="Elija el tipo de alimento no perecedero..."
                              autocompleteProps={{
                                title: "Tipo de alimento",
                              }}
                            />
                            <div>
                              <Label
                                htmlFor="textarea-2"
                                marginBottom={4}
                                display="block"
                              >
                                Descripción de los alimentos
                              </Label>
                              <Textarea
                                placeholder="Descripcion"
                                id="textarea-2"
                                label="Descripción de los alimentos"
                                onChange={(e) =>
                                  cambiar_alimentos_data({
                                    ...alimentos_data,
                                    descripcion: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        ) : alimentos_data.tipo === "Semi perecederos" ? (
                          <div>
                            <Text width={400}>Productos</Text>
                            <Textarea
                              placeholder="Descripcion"
                              onChange={(e) =>
                                cambiar_alimentos_data({
                                  ...alimentos_data,
                                  descripcion: e.target.value,
                                })
                              }
                            />
                          </div>
                        ) : alimentos_data.tipo === "Perecederos" ? (
                          <div>
                            <div>
                              <div>
                                <Text width={400}>Productos</Text>
                              </div>
                              <Textarea
                                placeholder="Descripcion"
                                onChange={(e) =>
                                  cambiar_alimentos_data({
                                    ...alimentos_data,
                                    descripcion: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : tipo_donaciones === "juguetes" ? (
                    <div>
                      <div className="Juguetes">
                        <Label marginBottom={4} display="block">
                          Género
                        </Label>
                        <Combobox
                          items={["Hombre", "Mujer"]}
                          onChange={(selected) =>
                            cambiar_juguetes_data({
                              ...juguetes_data,
                              genero: selected,
                            })
                          }
                          className="m-b"
                          width={400}
                          placeholder="Elija el genero..."
                          autocompleteProps={{
                            title: "Tipo de alimento",
                          }}
                        />
                        <Label marginBottom={4} display="block">
                          Descripción
                        </Label>
                        <Textarea
                          width={400}
                          name="Juguete"
                          placeholder="Descripcion del Juguete"
                          onChange={(e) =>
                            cambiar_juguetes_data({
                              ...juguetes_data,
                              descripcion: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  ) : null}
                  <div>
                    <Button
                      appearance="primary"
                      className="boton-ayuda"
                      onClick={enviarDonacion}
                    >
                      Enviar
                    </Button>
                  </div>
                </Pane>
              </div>
            ) : boton_donacion === "monetario" ? (
              <div>
                <Pane
                  className="form-vol"
                  elevation={1}
                  float="left"
                  width={1150}
                  height={620}
                  margin={40}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="columnS"
                >
                  <div className="inf-don">
                    <div>
                      <Text size={400}>Monetario</Text>
                    </div>

                    <div>
                      <div>
                        <h6>Número de cuenta</h6>
                        <Text>223305643</Text>
                      </div>
                      <div>
                        <h6>Nombre del Banco</h6>
                        <Text>Banco Pichincha </Text>
                      </div>
                      <div>
                        <h6>Tipo de cuenta</h6>
                        <Text>Ahorros</Text>
                      </div>
                    </div>
                    <div>
                      <Button
                        onClick={() => cambiar_validacion_donacion("validar")}
                        appearance="secundary"
                      >
                        Validar donación
                      </Button>
                    </div>
                    {validar_donacion === "validar" ? (
                      <div>
                        <div>
                          <TextInputField
                            onChange={(e) =>
                              cambiar_donacion_data({
                                ...donacion_data,
                                cantidad: e.target.value,
                              })
                            }
                            width={400}
                            label="¿Cuanto quiere donar?"
                            placeholder="$00.00"
                          />
                        </div>
                        <div>
                          <h6>Baucher</h6>
                          <FilePicker
                            onChange={(e) =>
                              cambiar_donacion_data({
                                ...donacion_data,
                                baucher: e.target.value,
                              })
                            }
                            multiple
                            width={250}
                            onChange={(files) => console.log(files)}
                            placeholder="Seleccionar archivo"
                          />
                        </div>
                        <h1></h1>
                        <div>
                          <Button
                            onClick={enviardonmonetaria}
                            appearance="primary"
                            className="boton-ayuda"
                          >
                            Enviar
                          </Button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </Pane>
              </div>
            ) : null}
          </Pane>
        </div>
      )}
      <Footer />
    </main>
  );
};
export default Donaciones;
