import * as React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { TextInput } from "evergreen-ui";

const Voluntariado = () => {
  return (
    <main>
      <NavbarComponent />

      <div>
        <TextInput
          name="text-input-name"
          placeholder="Text input placeholder..."
        />
        </div>
        <div>
        <TextInput
          name="text-input-name"
          placeholder="Text input placeholder..."
        />
      </div>
    </main>
  );
};
export default Voluntariado;
