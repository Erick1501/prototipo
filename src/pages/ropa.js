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

const Ropa = () => {
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
          <h1>654654</h1>
          <Dialog
            isShown={isShown}
            title="Donación"
            onCloseComplete={() => setIsShown(false)}
            hasFooter={false}
          >
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
          </Dialog>
        </div>
      </Pane>
    </main>
  );
};

export default Ropa;
