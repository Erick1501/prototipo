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

const TablaSoli = () => {
  const [isShown, setIsShown] = React.useState(false);
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
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Juan Andres</td>
                    <td>Lopez Mora</td>
                    <td>
                      <Button onClick={() => setIsShown(true)}>Ver</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                      <Button onClick={() => setIsShown(true)}>ver</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td> the Bird</td>
                    <td>
                      <Button onClick={() => setIsShown(true)}>ver</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div>
              <div>
                <Pane>
                  <Dialog
                    isShown={isShown}
                    title="Voluntario 1"
                    onCloseComplete={() => setIsShown(false)}
                  >
                    {({ close }) => (
                      <Pane>
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-12">
                              <div> <b>Nombres</b></div>
                              <div className="aws">Armando Pedro</div>
                              <div><b>Apellidos</b></div>
                              <div className="aws">Casas Poma</div>
                              <div><b>Correo Electrónico</b></div>
                              <div className="aws">armandopoma@45.com</div>
                              <div><b>Profesión</b></div>
                              <div className="aws">Doctor</div>
                              <div><b>Numero de celular</b></div>
                              <div className="aws">0987456123</div>
                            </div>
                          </div>
                        </div>
                        <Popover
                          position={Position.BOTTOM_LEFT}
                          content={
                            <Menu>
                              <Menu.Group>
                                <Menu.Item icon={EditIcon} secondaryText="">
                                  Editar
                                </Menu.Item>
                              </Menu.Group>
                              <Menu.Divider />
                              <Menu.Group>
                                <Menu.Item icon={TrashIcon} intent="danger">
                                  Eliminar
                                </Menu.Item>
                              </Menu.Group>
                            </Menu>
                          }
                        >
                          <Button marginRight={16}>Gestionar</Button>
                        </Popover>
                      </Pane>
                    )}
                  </Dialog>
                </Pane>
              </div>
            </div>
          </Pane>
    </main>
  );
};

export default TablaSoli;
