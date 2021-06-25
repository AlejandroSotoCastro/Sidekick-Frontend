import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/**IMPORT LEVEL DATA */

import { level2Features } from "../../config/level&classIDATA";

/**IMPORT BOOTSTRAP & REACT-SELECT*/
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

/**IMPORT ACTIONS */
import { applyLvl2 } from "../../store/sidekick/actions";

/**IMPORT SELECTORS */
import { selectSidekick } from "../../store/sidekick/selectors";

export default function Level2() {
  const sidekick = useSelector(selectSidekick);
  const { cclass } = sidekick;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);

  if (!level2Features.classFeatureNames[cclass]) return null;

  return (
    <Container>
      <span>
        <h3>
          2nd-level {cclass} features
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
          <h4>{level2Features.classFeatureNames[cclass]}</h4>
          <span> {level2Features.classFeatureText[cclass]}</span>

          <Button
            style={{ margin: "2% 2% 0% 2%" }}
            onClick={() => {
              setOpen(false);
              dispatch(applyLvl2(level2Features.classFeatureOptions[cclass]));
            }}
          >
            Apply level 2
          </Button>
        </Container>
      </Collapse>
    </Container>
  );
}
