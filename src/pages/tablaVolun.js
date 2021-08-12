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
  Text,
} from "evergreen-ui";

const TablaSoli = () => {
  const [isShown, setIsShown] = React.useState(false);
  const [data_del_back, actualizar_data_del_back] = React.useState([])
  const [voluntario_activo, cambiar_voluntario_activo] = React.useState({})
  
    React.useEffect(() => {
      fetch("http://localhost:1337/voluntarios")
        .then((response) => response.json())
        .then((data) => actualizar_data_del_back(data));
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
        <Table striped bordered hover>
            {data_del_back.length &&
              data_del_back.map((item, key) => (
                <>
                  <thead>
                    <tr>
                      <th>Solicitud</th>
                      <th>Estado</th>
                      <th></th> 
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
                            setIsShown(true)
                            cambiar_voluntario_activo(item)
                          }
                          }
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
                            <b>Nombres</b>
                          </div>
                          <div
                            className="aws"
                          >
                            {voluntario_activo.nombre}
                          </div>
                          <div>
                            <b>Apellidos</b>
                          </div>
                          <div className="aws">{voluntario_activo.apellido}</div>
                          <div>
                            <b>Correo Electronico</b>
                          </div>
                          <div className="aws">{voluntario_activo.email}</div>
                          <div>
                            <b>Cédula</b>
                          </div>
                          <div className="aws">{voluntario_activo.cedula}</div>
                          <div>
                            <b>Profesión</b>
                          </div>
                          <div className="aws">{voluntario_activo.profesion}</div>
                          <div>
                            <b>Numero de celular</b>
                          </div>
                          <div className="aws">{voluntario_activo.celular}</div>
                        </div>
                      </div>
                    </div>
                  </Pane>
                )}
              </Dialog>
            </Pane>
          </div>
        </div>
      <div position="BOTTOM_RIGHT">
      <Button >Imprimir reportes</Button>
      </div> 
      
    
      
    
      </Pane>
    </main>
  );
};

export default TablaSoli;
