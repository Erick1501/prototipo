import * as React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  Pane,
  Dialog,
  Popover,
  Position,
  Menu,
  EditIcon,
  TrashIcon,
} from "evergreen-ui";

const TablaPSV = () => {
  const [isShown, setIsShown] = React.useState(false);
  const [sector, cambiar_sector] = React.useState("");

  const [data_sur, actualizar_data_sur] = React.useState([]);
  const [psv_sur, cambiar_psv_sur] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:1337/sector-surs")
      .then((response) => response.json())
      .then((data) => actualizar_data_sur(data));
  }, []);

  const [data_centro, actualizar_data_centro] = React.useState([]);
  const [psv_centro, cambiar_psv_centro] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:1337/sector-centros")
      .then((response) => response.json()) 
      .then((data) => actualizar_data_centro(data));
  }, []);

  const [data_norte, actualizar_data_norte] = React.useState([]);
  const [psv_norte, cambiar_psv_norte] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:1337/sector-nortes")
      .then((response) => response.json())
      .then((data) => actualizar_data_norte(data));
  }, []);
  return (
    <main>
      <Pane
        className=""
        elevation={0}
        float="center"
        width={1220}
        height={550}
        margin={20}
        display="flex"
        justifyContent="right"
        alignItems="center"
        flexDirection="column"
      >
        <div>
          <Button onClick={() => cambiar_sector("sur")}> Sur</Button>
          <Button onClick={() => cambiar_sector("centro")}>Centro</Button>
          <Button onClick={() => cambiar_sector("norte")}>Norte</Button>
        </div>
        <div>
          {sector === "sur" ? (
            <div>
              <div>
                <Table striped bordered hover>
                  {data_sur.length &&
                    data_sur.map((item, key) => (
                      <>
                        <thead>
                          <tr>
                            <th>Sector</th>
                            <th>Direccion</th>
                            <th>sexo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{key + 1}</td>
                            <td>
                              <div>Nuevo</div>
                            </td>
                            <td>
                              <Button
                                onClick={() => {
                                  setIsShown(true);
                                  cambiar_psv_sur(item);
                                }}
                              >
                                Ver
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    ))}
                </Table>
              </div>
              <div>
                <Pane>
                  <Dialog
                    isShown={isShown}
                    title="Solicitudes"
                    onCloseComplete={() => setIsShown(false)}
                    confirmLabel="Aceptar"
                    cancelLabel="Rechazar"
                  >
                    {({ close }) => (
                      <Pane>
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-12">
                              <div>
                                <b>sector</b>
                              </div>
                              <div className="aws">{psv_sur.sector}</div>
                              <div>
                                <b>Direccion</b>
                              </div>
                              <div className="aws">{psv_sur.direccion}</div>
                              <div>
                                <b>numero personas</b>
                              </div>
                              <div className="aws">{psv_sur.personas}</div>
                              <div>
                                <b>Descripcion</b>
                              </div>
                              <div className="aws">{psv_sur.descripcion}</div>
                            </div>
                          </div>
                        </div>
                      </Pane>
                    )}
                  </Dialog>
                </Pane>
              </div>
            </div>
          ) : sector === "centro" ? (
            <div>
              <div>
                <div>
                  <Table striped bordered hover>
                    {data_centro.length &&
                      data_centro.map((item, key) => (
                        <>
                          <thead>
                            <tr>
                              <th>Sector</th>
                              <th>Direccion</th>
                              <th>sexo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{key + 1}</td>
                              <td>
                                <div>Nuevo</div>
                              </td>
                              <td>
                                <Button
                                  onClick={() => {
                                    setIsShown(true);
                                    cambiar_psv_centro(item);
                                  }}
                                >
                                  Ver
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      ))}
                  </Table>
                </div>
                <div>
                  <Pane>
                    <Dialog
                      isShown={isShown}
                      title="Solicitudes"
                      onCloseComplete={() => setIsShown(false)}
                      confirmLabel="Aceptar"
                      cancelLabel="Rechazar"
                    >
                      {({ close }) => (
                        <Pane>
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12">
                                <div>
                                  <b>sector</b>
                                </div>
                                <div className="aws">{psv_centro.sector}</div>
                                <div>
                                  <b>Direccion</b>
                                </div>
                                <div className="aws">
                                  {psv_centro.direccion}
                                </div>
                                <div>
                                  <b>numero personas</b>
                                </div>
                                <div className="aws">{psv_centro.personas}</div>
                                <div>
                                  <b>Descripcion</b>
                                </div>
                                <div className="aws">
                                  {psv_centro.descripcion}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Pane>
                      )}
                    </Dialog>
                  </Pane>
                </div>
              </div>
            </div>
          ) : sector === "norte" ? (
            <div>
              <div>
                <div>
                  <Table striped bordered hover>
                    {data_norte.length &&
                      data_norte.map((item, key) => (
                        <>
                          <thead>
                            <tr>
                              <th>Sector</th>
                              <th>Direccion</th>
                              <th>sexo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{key + 1}</td>
                              <td>
                                <div>Nuevo</div>
                              </td>
                              <td>
                                <Button
                                  onClick={() => {
                                    setIsShown(true);
                                    cambiar_psv_norte(item);
                                  }}
                                >
                                  Ver
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      ))}
                  </Table>
                </div>
                <div>
                  <Pane>
                    <Dialog
                      isShown={isShown}
                      title="Solicitudes"
                      onCloseComplete={() => setIsShown(false)}
                      confirmLabel="Aceptar"
                      cancelLabel="Rechazar"
                    >
                      {({ close }) => (
                        <Pane>
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12">
                                <div>
                                  <b>sector</b>
                                </div>
                                <div className="aws">{psv_norte.sector}</div>
                                <div>
                                  <b>Direccion</b>
                                </div>
                                <div className="aws">{psv_norte.direccion}</div>
                                <div>
                                  <b>numero personas</b>
                                </div>
                                <div className="aws">{psv_norte.personas}</div>
                                <div>
                                  <b>Descripcion</b>
                                </div>
                                <div className="aws">{psv_norte.descripcion}</div>
                              </div>
                            </div>
                          </div>
                        </Pane>
                      )}
                    </Dialog>
                  </Pane>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Pane>
    </main>
  );
};

export default TablaPSV;
