import React from "react";
import { useSelector } from "react-redux";

/**IMPORT BOOTSTRAP & REACT-SELECT*/

import Jumbotron from "react-bootstrap/Jumbotron";

/**IMPORT COMPONENTS */
import Level1 from "./Level1";

/**IMPORT SELECTORS */
import { selectSidekick } from "../../store/sidekick/selectors";

export default function Editor() {
  const sidekick = useSelector(selectSidekick);
  const { level, cclass } = sidekick;
  return (
    <Jumbotron>
      {/**Form level 1 ass soon as class is selected */}
      <Level1 />
      {/**Form level 2 if lvl >=2 */}
      {cclass && level >= 2 && <form>Form2</form>}
    </Jumbotron>
  );
}
