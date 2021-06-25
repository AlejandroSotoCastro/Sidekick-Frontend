import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/**IMPORT LEVEL DATA */

import { level1Features } from "../../config/level&classIDATA";

/**IMPORT BOOTSTRAP & REACT-SELECT*/
import Select from "react-select";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

/**IMPORT ACTIONS */
import { applyLvl1 } from "../../store/sidekick/actions";

/**IMPORT SELECTORS */
import { selectSidekick } from "../../store/sidekick/selectors";

export default function Level1() {
  const sidekick = useSelector(selectSidekick);
  const { cclass } = sidekick;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const [lvl1Values, setlvl1Values] = useState({
    savingProf: "",
    skillProf: [],
    speciality: "",
    otherProf: "",
  });
  return (
    <Container>
      <span>
        <h3>
          1st-level {cclass} features
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
          <h4>BONUS PROFICIENCIES</h4>
          <p>
            The sidekick gains proficiency in one saving throw of your choice:
          </p>

          <Select
            placeholder="Select saving throw proficiencies"
            onChange={(text) =>
              setlvl1Values({
                ...lvl1Values,
                savingProf: text.value,
              })
            }
            options={level1Features.savingThrowOptions[cclass]}
          />

          <p>
            In addition, the sidekick gains proficiency in{" "}
            {level1Features.skillNumOfOptions[cclass]} skills of your choice:
          </p>

          <Select
            placeholder="Select skill proficiencies"
            onChange={(text) => {
              setlvl1Values({
                ...lvl1Values,
                skillProf: text.map((each) => each.value),
              });
            }}
            options={
              lvl1Values.skillProf.length >=
              level1Features.skillNumOfOptions[cclass]
                ? []
                : level1Features.skillOptios[cclass]
            }
            noOptionsMessage={() => {
              return lvl1Values.skillProf.length >=
                level1Features.skillNumOfOptions[cclass]
                ? "You have reached the max options value"
                : "No options available";
            }}
            isMulti
            isClearable
          />

          <p>
            It also gains proficiency with light armor and, if it is a humanoid
            or has a simple or martial weapon in its stat block, it also gains
            proficiency with {level1Features.otherProfOptions[cclass]}
          </p>

          <h4>{level1Features.classFeatureNames[cclass]}</h4>
          <span> {level1Features.classFeatureText[cclass]}</span>

          {level1Features.classFeatureOptions[cclass].length > 0 && (
            <Select
              placeholder="Select a speciality"
              onChange={(text) =>
                setlvl1Values({
                  ...lvl1Values,
                  speciality: text.value,
                })
              }
              options={level1Features.classFeatureOptions[cclass]}
            />
          )}

          <Button
            style={{ margin: "2% 2% 0% 2%" }}
            onClick={() => {
              setOpen(false);
              setlvl1Values({
                ...lvl1Values,
                otherProf: {
                  name: level1Features.otherProfOptions[cclass],
                  stat: "",
                },
              });
              dispatch(applyLvl1(lvl1Values));
            }}
          >
            Apply level 1
          </Button>
        </Container>
      </Collapse>
    </Container>
  );
}
