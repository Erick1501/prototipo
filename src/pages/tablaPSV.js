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
                <th>Sector</th> 
                <th>Direccion</th>
                <th>sexo</th>
                <th># personas</th>      
                <th>Descripcion</th>       
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Villaflora</th>
                <th>Rodrigo de chavez y Alonso de angulo</th>
                <th>Masculino</th>
                <th>1</th>
                <th>Hombre de edad avanzada</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </Pane>
    </main>
  );
};

export default TablaPSV;
