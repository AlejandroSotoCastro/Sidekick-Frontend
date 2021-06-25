import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/**IMPORT LEVEL DATA */

import { level3Features } from "../../config/level&classIDATA";

/**IMPORT BOOTSTRAP & REACT-SELECT*/
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

/**IMPORT ACTIONS */
import { applyLvl3 } from "../../store/sidekick/actions";

/**IMPORT SELECTORS */
import { selectSidekick } from "../../store/sidekick/selectors";

export default function Level3() {
  const sidekick = useSelector(selectSidekick);
  const { cclass } = sidekick;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);

  if (!level3Features.classFeatureNames[cclass]) return null;

  return (
    <Container>
      <span>
        <h3>
          3nd-level {cclass} features
          <Button
            style={{ margin: "2% 2% 2% 2%" }}
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? "Reduce" : "Expand"}
          </Button>
        </h3>
      </span>
      <Collapse className="Editor-lvl-features" in={open}>
        <Container style={{ border: "solid", padding: "2% 2% 2% 2%" }}>
          <h4>{level3Features.classFeatureNames[cclass]}</h4>
          <span> {level3Features.classFeatureText[cclass]}</span>

          <Button
            style={{ margin: "2% 2% 0% 2%" }}
            onClick={() => {
              setOpen(false);
              dispatch(applyLvl3(level3Features.classFeatureOptions[cclass]));
            }}
          >
            Apply level 3
          </Button>
        </Container>
      </Collapse>
    </Container>
  );
}
