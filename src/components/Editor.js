import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

/**IMPORT BOOTSTRAP & REACT-SELECT*/
import Select from "react-select";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

/**IMPORT ACTIONS */
import { fetchListOfMonsters } from "../store/monsters/actions";

import { fetchMonster } from "../store/sidekick/actions";
import { pickClass } from "../store/sidekick/actions";

/**IMPORT SELECTORS */
import { selectSidekick } from "../store/sidekick/selectors";

export default function Editor() {
  const sidekick = useSelector(selectSidekick);
  const { level, cclass } = sidekick;

  const [lvl1Values, setlvl1Values] = useState({ skillProf: [] });

  const level1Features = {
    savingThrowOptions: {
      warrior: [
        { value: "STR", label: "Strength" },
        { value: "DEX", label: "Dexterity" },
        { value: "CON", label: "Constitution" },
      ],
      spellcaster: [
        { value: "WIS", label: "Wisdom" },
        { value: "INT", label: "Intelligence" },
        { value: "CHA", label: "Charisma" },
      ],

      expert: [
        { value: "DEX", label: "Dexterity" },
        { value: "INT", label: "Intelligence" },
        { value: "CHA", label: "Charisma" },
      ],
    },
    skillNumOfOptions: { warrior: 2, spellcaster: 2, expert: 5 },

    skillOptios: {
      warrior: [
        { value: "Acrobatics", label: "acrobatics" },
        { value: "Animal_Handling", label: "animal handeling" },
        { value: "Athletics", label: "athletics" },
        { value: "Intimidation", label: "intimidation" },
        { value: "Nature", label: "nature" },
        { value: "Perception", label: "perception" },
        { value: "Survival", label: "survival" },
      ],
      spellcaster: [
        { value: "WIS", label: "Wisdom" },
        { value: "INT", label: "Intelligence" },
        { value: "CHA", label: "Charisma" },
      ],

      expert: [
        { value: "DEX", label: "Dexterity" },
        { value: "INT", label: "Intelligence" },
        { value: "CHA", label: "Charisma" },
      ],
    },
  };

  return (
    <Jumbotron>
      {/**Form level 1 ass soon as class is selected */}
      <h3>BONUS PROFICIENCIES</h3>
      <h4>1st-level {cclass} feature </h4>
      <Container style={{ border: "solid", padding: "2% 2% 2% 2%" }}>
        <p>
          The sidekick gains proficiency in one saving throw of your choice:
        </p>

        <Select
          placeholder="Select saving throw proficiencies"
          onChange={(text) => console.log(text.value)}
          options={level1Features.savingThrowOptions[cclass]}
          styles={{
            option: (provided, state) => ({
              ...provided,
              color: "black",
              padding: 20,
            }),
          }}
        />

        <p>
          In addition, the sidekick gains proficiency in five skills of your
          choice, and it gains proficiency with light armor. If it is a humanoid
          or has a simple or martial weapon in its stat block, it also gains
          profi- ciency with all simple weapons and with two tools of your
          choice.
        </p>

        <Select
          placeholder="Select skill proficiencies"
          onChange={(text) => {
            setlvl1Values({
              ...lvl1Values,
              skillProf: [...lvl1Values.skillProf, text],
            });
            console.log("hola");
            console.log(text);
          }}
          options={
            lvl1Values.skillProf.length ===
            level1Features.skillNumOfOptions[cclass]
              ? []
              : level1Features.skillOptios[cclass]
          }
          noOptionsMessage={() => {
            return lvl1Values.skillProf.length ===
              level1Features.skillNumOfOptions[cclass]
              ? "You have reached the max options value"
              : "No options available";
          }}
          isMulti
          isClearable
          styles={{
            option: (provided, state) => ({
              ...provided,
              color: "black",
              padding: 20,
            }),
          }}
        />

        <p>
          In addition, the sidekick gains proficiency in two skills of your
          choice from the following list: Arcana, History, Insight,
          Investigation, Medicine, Perfor- mance, Persuasion, and Religion. The
          sidekick gains proficiency with light armor, and if it is a humanoid
          or has a simple or martial weapon in its stat block, it also gains
          proficiency with all simple weapons.
        </p>

        <p>
          In addition, the sidekick gains proficiency in two skills of your
          choice from the following list: Acro- batics, Animal Handling,
          Athletics, Intimidation, Nature, Perception, and Survival. The
          sidekick gains proficiency with all armor, and if it is a humanoid or
          has a simple or martial weapon in its stat block, it gains proficiency
          with shields and all simple and martial weapons.
        </p>
      </Container>

      {/**Form level 2 if lvl >=2 */}
      {cclass && level >= 2 && <form>Form2</form>}
    </Jumbotron>
  );
}
