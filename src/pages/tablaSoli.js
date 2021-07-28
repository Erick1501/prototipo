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
                <th>Solicitud</th> 
                <th>Estado</th>
                <th></th>             
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div>Nuevo</div>
                </td>
                <td>
                  <Button onClick={() => setIsShown(true)}>Ver</Button>
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
                title="Solicitudes"
                onCloseComplete={() => setIsShown(false)}
              >
                {({ close }) => (
                  <Pane>
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12">
                          <div><b>Nombres</b> </div>
                          <div className="aws">Armando Pedro</div>
                          <div><b>Apellidos</b></div>
                          <div className="aws">Casas Poma</div>
                          <div><b>Correo Electronico</b></div>
                          <div className="aws">armandopoma@45.com</div>
                          <div><b>Profesión</b></div>
                          <div className="aws">Doctor</div>
                          <div><b>Numero de celular</b></div>
                          <div className="aws">0987456123</div>
                        </div>
                      </div>
                    </div>
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
