import * as React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  Pane,
  Dialog,
  Text,
  Label,
  Position,
  Menu,
  EditIcon,
  TrashIcon,
} from "evergreen-ui";
import Ropa from "../pages/ropa";
import Alimentos from "../pages/alimentos";
import Juguetes  from "../pages/juguetes";
import Monetario from "../pages/monetario";



const TablaDona = () => {
  const [isShown, setIsShown] = React.useState(false);
  const [articulo, cambiar_articulo] = React.useState(false);

  /** informacion de donante **/
  const [data_donante, actualizar_data_donante] = React.useState([]);
  const [inf_donante, cambiar_inf_donante] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:1337/registro-donantes")
      .then((response) => response.json())
      .then((data) => actualizar_data_donante(data));
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
            {data_donante.length &&
              data_donante.map((item, key) => (
                <>
                  <thead>
                    <tr>
                      <th>#</th>                     
                      <th>Información</th>
                      <th>Tipo donación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{key + 1}</td>                    
                      <td>
                        <Button
                          onClick={() => {
                            setIsShown(true);
                            cambiar_inf_donante(item);
                          }}
                        >
                          Ver Información
                        </Button>
                      </td>
                      <td>
                        <div>
                          <Button onClick={() => cambiar_articulo("ropa")}>
                            {" "}
                            Ropa
                          </Button>
                          <Button onClick={() => cambiar_articulo("alimentos")}>
                            {" "}
                            Alimentos
                          </Button>
                          <Button onClick={() => cambiar_articulo("juguetes")}>
                            {" "}
                            Juguetes
                          </Button>
                          <Button onClick={() => cambiar_articulo("monetario")}>
                            {" "}
                            Monetario
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
          </Table>
          <Pane>
            <Dialog
              isShown={isShown}
              title="Donante 1"
              onCloseComplete={() => setIsShown(false)}
              hasFooter={false}
            >
              <div>
                <div>
                  <b>Nombres</b>
                </div>
                <div className="aws">{inf_donante.Nombre} </div>
                <div>
                  <b>Apellidos</b>
                </div>
                <div className="aws">{inf_donante.Apellido}</div>
                <div>
                  <b>Correo Electrónico</b>
                </div>
                <div className="aws">{inf_donante.correo}</div>
                <div>
                  <b>Numero de celular</b>
                </div>
                <div className="aws">{inf_donante.numero}</div>
              </div>
            </Dialog>
          </Pane>
        </div>
        <div>
          <div>
            {articulo === "ropa" ? (
              <div>
                <Ropa />
              </div>
            ) : articulo === "alimentos" ? (
              <div>
                <Alimentos />
              </div>
            ) : articulo === "juguetes" ? (
              <di>
                <Juguetes />
              </di>
            ) : articulo === "monetario" ? (
              <div>
                <Monetario />
              </div>
            ) : null}
          </div>
        </div>
        <div></div>
      </Pane>
    </main>
  );
};

export default TablaDona;
