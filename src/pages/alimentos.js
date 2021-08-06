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

const Alimentos = () => {
  const [isShown, setIsShown] = React.useState(false);

   /** informacion de la donacion de ropa **/
   const [data_alimentos, actualizar_data_alimentos] = React.useState([]);
   const [inf_data_alimentos, cambiar_inf_data_alimentos] = React.useState([]);
 
   React.useEffect(() => {
     fetch("http://localhost:1337/articulos-alimentos")
       .then((response) => response.json())
       .then((data) => actualizar_data_alimentos(data));
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
            {data_alimentos.length &&
              data_alimentos.map((item, key) => (
                <>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre del donante</th>
                      <th>Información</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{key + 1}</td>
                      <td>name</td>
                      <td>
                        <Button
                          onClick={() => {
                            setIsShown(true);
                            cambiar_inf_data_alimentos(item);
                          }}
                        >
                          Ver Información
                        </Button>
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
                  <b>Tipo</b>
                </div>
                <div className="aws">{inf_data_alimentos.tipo} </div>
                <div>
                  <b>Tipo 2</b>
                </div>
                <div className="aws">{inf_data_alimentos .tipo2}</div>
                <div>
                  <b>Descripción</b>
                </div>
                <div className="aws">{inf_data_alimentos.descripcion}</div>             
              </div>
            </Dialog>
          </Pane>          
        </div>
      </Pane>
    </main>
  );
};

export default Alimentos;
