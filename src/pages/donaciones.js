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
} from "evergreen-ui";
import { Form } from "react-bootstrap";
import Footer from "../components/Footer";

const Donaciones = () => {
  const [validacion_formu, cambiar_validacion_formu] = React.useState(true);
  const [tipo_donaciones, cambiar_tipo_donaciones] = React.useState("");
  const [tipo_alimentos, cambiar_tipo_alimentos] = React.useState("");
  const [boton_donacion, cambiar_boton_donacion] = React.useState("");
  const [genero_ropa, cambiar_genero_ropa] = React.useState("");
  const [talla_ropa, cambiar_talla_ropa] = React.useState("");
  const [validar_donacion, cambiar_validacion_donacion] = React.useState("");

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
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Número Celular</Form.Label>
              <Form.Control type="phone" />
            </Form.Group>
          </div>

          <Button
            onClick={() => cambiar_validacion_formu("")}
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
                        <div>
                          <div>
                            <Text size={400}>Genero</Text>
                          </div>
                          <Button onClick={() => cambiar_genero_ropa("hombre")}>
                            Hombre
                          </Button>
                          <Button onClick={() => cambiar_genero_ropa("hombre")}>
                            Mujer
                          </Button>
                        </div>
                        {genero_ropa === "hombre" ? (
                          <div>
                            <div>
                              <div>
                                <Text size={400}>Tipo</Text>
                              </div>
                              <Button
                                onClick={() => cambiar_talla_ropa("camiseta")}
                              >
                                Camiseta
                              </Button>
                              <Button
                                onClick={() => cambiar_talla_ropa("pantalon")}
                              >
                                Pantalón
                              </Button>
                              <Button
                                onClick={() => cambiar_talla_ropa("chompa")}
                              >
                                Chompa
                              </Button>
                              <Button
                                onClick={() => cambiar_talla_ropa("zapatos")}
                              >
                                Zapatos
                              </Button>
                            </div>
                            {talla_ropa === "camiseta" ? (
                              <div>
                                <div>
                                  <div>
                                    <Text size={400}>Talla</Text>
                                  </div>
                                  <Button>S - (36)</Button>
                                  <Button>M - (38)</Button>
                                  <Button>L - (40)</Button>
                                  <Button>XL - (42)</Button>
                                </div>
                                <div>
                                  <TextInputField
                                    width={400}
                                    label="Cantidad de ropa"
                                  />
                                </div>
                              </div>
                            ) : talla_ropa === "pantalon" ? (
                              <div>
                                <div>
                                  <div>
                                    <Text size={400}>Talla</Text>
                                  </div>
                                  <Button>S - (36)</Button>
                                  <Button>M - (38)</Button>
                                  <Button>L - (40)</Button>
                                  <Button>XL - (42)</Button>
                                </div>
                                <div>
                                  <TextInputField
                                    width={400}
                                    label="Cantidad de ropa"
                                  />
                                </div>
                              </div>
                            ) : talla_ropa === "chompa" ? (
                              <div>
                                <div>
                                  <div>
                                    <Text size={400}>Talla</Text>
                                  </div>
                                  <Button>S - (36)</Button>
                                  <Button>M - (38)</Button>
                                  <Button>L - (40)</Button>
                                  <Button>XL - (42)</Button>
                                </div>
                                <div>
                                  <TextInputField
                                    width={400}
                                    label="Cantidad de ropa"
                                  />
                                </div>
                              </div>
                            ) : talla_ropa === "zapatos" ? (
                              <div>
                                <div>
                                  <div>
                                    <Text size={400}>Talla</Text>
                                  </div>
                                  <Button>S - (36)</Button>
                                  <Button>M - (38)</Button>
                                  <Button>L - (40)</Button>
                                  <Button>XL - (42)</Button>
                                </div>
                                <div>
                                  <TextInputField
                                    width={400}
                                    label="Cantidad de ropa"
                                  />
                                </div>
                              </div>
                            ) : null}
                          </div>
                        ) : genero_ropa === "mujer" ? (
                          <div>
                            <div>
                              <div>
                                <Text size={400}>Tipo</Text>
                              </div>
                              <Button
                                onClick={() => cambiar_talla_ropa("camiseta")}
                              >
                                Camiseta
                              </Button>
                              <Button
                                onClick={() => cambiar_talla_ropa("pantalon")}
                              >
                                Pantalòn
                              </Button>
                              <Button
                                onClick={() => cambiar_talla_ropa("chompa")}
                              >
                                Chompa
                              </Button>
                              <Button
                                onClick={() => cambiar_talla_ropa("zapatos")}
                              >
                                Zapatos
                              </Button>
                            </div>
                            {talla_ropa === "camiseta" ? (
                              <div>
                                <div>
                                  <div>
                                    <Text size={400}>Talla</Text>
                                  </div>
                                  <Button>S - (36)</Button>
                                  <Button>M - (38)</Button>
                                  <Button>L - (40)</Button>
                                  <Button>XL - (42)</Button>
                                </div>
                                <div>
                                  <TextInputField
                                    width={400}
                                    label="Cantidad de ropa"
                                  />
                                </div>
                              </div>
                            ) : talla_ropa === "pantalon" ? (
                              <div>
                                <div>
                                  <div>
                                    <Text size={400}>Talla</Text>
                                  </div>
                                  <Button>S - (36)</Button>
                                  <Button>M - (38)</Button>
                                  <Button>L - (40)</Button>
                                  <Button>XL - (42)</Button>
                                </div>
                                <div>
                                  <TextInputField
                                    width={400}
                                    label="Cantidad de ropa"
                                  />
                                </div>
                              </div>
                            ) : talla_ropa === "chompa" ? (
                              <div>
                                <div>
                                  <div>
                                    <Text size={400}>Talla</Text>
                                  </div>
                                  <Button>S - (36)</Button>
                                  <Button>M - (38)</Button>
                                  <Button>L - (40)</Button>
                                  <Button>XL - (42)</Button>
                                </div>
                                <div>
                                  <TextInputField
                                    width={400}
                                    label="Cantidad de ropa"
                                  />
                                </div>
                              </div>
                            ) : talla_ropa === "zapatos" ? (
                              <div>
                                <div>
                                  <div>
                                    <Text size={400}>Talla</Text>
                                  </div>
                                  <Button>S - (36)</Button>
                                  <Button>M - (38)</Button>
                                  <Button>L - (40)</Button>
                                  <Button>XL - (42)</Button>
                                </div>
                                <div>
                                  <TextInputField
                                    width={400}
                                    label="Cantidad de ropa"
                                  />
                                </div>
                              </div>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : tipo_donaciones === "alimentos" ? (
                    <div>
                      <div className="Alimetos">
                        <div>
                          <Text width={400}> Alimentos </Text>
                          <div>
                            <Text size={400}>Tipo</Text>
                          </div>
                        </div>
                        <div>
                          <Tooltip content="Azúcar, sal, harinas, cereales... etc.">
                            <Button
                              onClick={() =>
                                cambiar_tipo_alimentos("no-pereceredos")
                              }
                            >
                              No ereceredos
                            </Button>
                          </Tooltip>
                          <Tooltip content="Huevos, papas,  frutos secos... etc.">
                            <Button
                              onClick={() =>
                                cambiar_tipo_alimentos("semi-pereceredos")
                              }
                            >
                              Semi-perecederos
                            </Button>
                          </Tooltip>
                          <Tooltip content="Leche, carne, frutas , vegetales... etc.">
                            <Button
                              onClick={() =>
                                cambiar_tipo_alimentos("pereceredos")
                              }
                            >
                              Pereceredos
                            </Button>
                          </Tooltip>
                        </div>
                        {tipo_alimentos === "no-pereceredos" ? (
                          <div>
                            <div>
                              <Text width={400}>Productos</Text>
                            </div>
                            <div>
                              <Text width={400}>Tipo</Text>
                            </div>
                            <div>
                              <Tooltip content="Atún, sardina, maíz... etc.  ">
                                <Button>Enlatados</Button>
                              </Tooltip>
                              <Tooltip content="Avena, lenteja, frejol... etc. ">
                                <Button>Secos</Button>
                              </Tooltip>
                            </div>
                            <Autocomplete
                              title="productos"
                              width={100}
                              onChange={(changedItem) =>
                                console.log(changedItem)
                              }
                              items={["Azucar", "Sal", "Harina"]}
                            >
                              {(props) => {
                                const {
                                  getInputProps,
                                  getRef,
                                  inputValue,
                                } = props;
                                return (
                                  <Textarea
                                    placeholder="Descripcion"
                                    value={inputValue}
                                    ref={getRef}
                                    {...getInputProps()}
                                  />
                                );
                              }}
                            </Autocomplete>
                          </div>
                        ) : tipo_alimentos === "semi-pereceredos" ? (
                          <div>
                            <Text width={400}>Productos</Text>
                            <Textarea placeholder="Descripcion" />
                          </div>
                        ) : tipo_alimentos === "pereceredos" ? (
                          <div>
                            <div>
                              <div>
                                <Text width={400}>Productos</Text>
                              </div>

                              <Autocomplete
                                title="productos"
                                width={100}
                                onChange={(changedItem) =>
                                  console.log(changedItem)
                                }
                                items={["Azucar", "Sal", "Harina"]}
                              >
                                {(props) => {
                                  const {
                                    getInputProps,
                                    getRef,
                                    inputValue,
                                  } = props;
                                  return (
                                    <Textarea
                                      placeholder="Descripcion"
                                      value={inputValue}
                                      ref={getRef}
                                      {...getInputProps()}
                                    />
                                  );
                                }}
                              </Autocomplete>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : tipo_donaciones === "juguetes" ? (
                    <div>
                      <div className="Juguetes">
                        <Text width={400}>Juguetes</Text>
                        <div>
                          <Button>Hombre</Button>
                          <Button>Mujer </Button>
                        </div>
                        <Textarea
                          name="Juguete"
                          placeholder="Descripcion del Juguete"
                        />
                      </div>
                    </div>
                  ) : null}
                  <div>
                    <Button appearance="primary" className="boton-ayuda">
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
                            width={400}
                            label="¿Cuanto quiere donar?"
                            placeholder="$00.00"
                          />
                        </div>
                        <div>
                          <h6>Baucher</h6>
                          <FilePicker
                            multiple
                            width={250}
                            onChange={(files) => console.log(files)}
                            placeholder="Seleccionar archivo"
                          />
                        </div>
                        <h1></h1>
                        <div>
                          <Button appearance="primary" className="boton-ayuda">
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
