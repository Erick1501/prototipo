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
import Ropa from "./ropa";
import Link from "gatsby";

const TablaDona = () => {
  //const [perfil, cambiar_perfil] = React.useState(false);
  const [isShown, setIsShown] = React.useState(false);
  const [isarticulo, setarticulo] = React.useState(false);
  const [tipo, cambiar_tipo] = React.useState("");
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
                <th>Nombre del donante</th>
                <th>Información</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Juan Casas </th>
                <th>
                  <Button onClick={() => setIsShown(true)}>Ver Inf</Button>
                </th>
                <th>
                  <div></div>
                </th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>luis sebas tub</th>
                <th>nuevo</th>
                <th>
                  <div>
                    <Button>monetario</Button>
                  </div>
                  <div>
                    <Button>articulo</Button>
                  </div>
                </th>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <Pane>
            <Dialog
              isShown={isShown}
              title="Donante 1"
              onCloseComplete={() => setIsShown(false)}
              hasFooter={false}
            >
              <div className="row">
                <div className="col-sm-12">
                  <div>
                    <b>Nombres</b>
                  </div>
                  <div className="aws">Armando Pedro</div>
                  <div>
                    <b>Apellidos</b>
                  </div>
                  <div className="aws">Casas Poma</div>
                  <div>
                    <b>Correo Electrónico</b>
                  </div>
                  <div className="aws">armandopoma@45.com</div>
                  <div>
                    <b>Numero de celular</b>
                  </div>
                  <div className="aws">0987456123</div>
                </div>
                <div>
                  <Button onClick={() => cambiar_tipo("monetario")}>
                    Monetario
                  </Button>
                  <Button onClick={() => cambiar_tipo("articulo")}>
                    Articulo
                  </Button>
                </div>
                <div>
                  {tipo === "monetario" ? (
                    <div>
                      <Pane height={250} width="50%" backgroundColor="#ddd" />
                    </div>
                  ) : tipo === "articulo" ? (
                    <div>
                      <Pane height={550} width="500%" backgroundColor="#ddd">
                        <div className="row">
                          <div className="col-sm-12">
                            <div>
                              <b>Articulo</b>
                            </div>
                            <div className="aws">ropa</div>
                            <div>
                              <b>Genero</b>
                            </div>
                            <div className="aws">Hombre</div>
                            <div>
                              <b>Tipo</b>
                            </div>
                            <div className="aws">Pantalón</div>
                            <div>
                              <b>Talla</b>
                            </div>
                            <div className="aws">S-(36)</div>
                            <div>
                              <b>Cantidad de ropa</b>
                            </div>
                            <div className="aws">2</div>
                          </div>
                        </div>
                      </Pane>
                    </div>
                  ) : null}
                </div>
              </div>
            </Dialog>
          </Pane>
        </div>
      </Pane>
    </main>
  );
};

export default TablaDona;
