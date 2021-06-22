import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

/**IMPORT BOOTSTRAP & REACT-SELECT*/
import Select from "react-select";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

/**IMPORT ACTIONS */
import { applyLvl1 } from "../store/sidekick/actions";

import { fetchMonster } from "../store/sidekick/actions";
import { pickClass } from "../store/sidekick/actions";

/**IMPORT SELECTORS */
import { selectSidekick } from "../store/sidekick/selectors";

export default function Editor() {
  const sidekick = useSelector(selectSidekick);
  const { level, cclass } = sidekick;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const [lvl1Values, setlvl1Values] = useState({
    savingProf: "",
    skillProf: [],
    speciality: "",
    otherProf: "",
  });

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
    otherProfOptions: {
      warrior: "shields and all simple and martial weapons.",
      spellcaster: "all simple weapons",
      expert: "all simple weapons and with two tools of your choice",
    },

    skillOptios: {
      warrior: [
        { value: "Acrobatics", label: "Acrobatics" },
        { value: "Animal_handeling", label: "Animal Handling" },
        { value: "Athletics", label: "Athletics" },
        { value: "Intimidation", label: "Intimidation" },
        { value: "Nature", label: "Nature" },
        { value: "Perception", label: "Perception" },
        { value: "Survival", label: "Survival" },
      ],
      spellcaster: [
        { value: "Arcana", label: "Arcana" },
        { value: "History", label: "History" },
        { value: "Insight", label: "Insight" },
        { value: "Investigation", label: "Investigation" },
        { value: "Medicine", label: "Medicine" },
        { value: "Performance", label: "Performance" },
        { value: "Persuasion", label: "Persuasion" },
        { value: "Religion", label: "Religion" },
      ],

      /**expert can choose from all  */
      expert: [
        { value: "Athletics", label: "Athletics" },
        { value: "Acrobatics", label: "Acrobatics" },
        { value: "Sleight_of_Hand", label: "Sleigt of hand" },
        { value: "Stealth", label: "Stealth" },
        { value: "Arcana", label: "Arcana" },
        { value: "History", label: "History" },
        { value: "Investigation", label: "Investigation" },
        { value: "Nature", label: "Nature" },
        { value: "Religion", label: "Religion" },
        { value: "Animal_Handeling", label: "Animal Handeling" },
        { value: "Insight", label: "Insight" },
        { value: "Medicine", label: "Medicine" },
        { value: "Perception", label: "Perception" },
        { value: "Survival", label: "Survival" },
        { value: "Deception", label: "Deception" },
        { value: "Intimidation", label: "Intimidation" },
        { value: "Performance", label: "Performance" },
        { value: "Persuasion", label: "Persuasion" },
      ],
    },

    classFeatureNames: {
      warrior: "MARTIAL ROLE",
      spellcaster: "SPELLCASTING",
      expert: "HELPFUL",
    },

    classFeatureText: {
      warrior: (
        <span>
          Each warrior focuses on offense or defense in their training. Choose
          one of the following options:
          <ul>
            <li>
              Attacker: The sidekick gains a +2 bonus to all attack rolls.
            </li>
            <li>
              Defender: The sidekick can use its reaction to impose disadvantage
              on the attack roll of a creature within 5 feet of it whose target
              isn't the sidekick, provided the sidekick can see the attacker.
            </li>
          </ul>
        </span>
      ),
      spellcaster:
        "The sidekick gains the ability to cast spells. (If the creature already has the Spellcasting trait, this feature replaces that trait.) Choose the Spellcaster's role: Mage, Healer, or Prodigy. This choice deter-mines the spell list and spellcasting ability used by the sidekick, as shown on the Spellcasting table. Spell Slots. The Spellcaster table shows how many spell slots the sidekick has to cast its Spell- caster spells of 1st level and higher. To cast one of these spells, the sidekick must expend a slot of the spell's level or higher. The sidekick regains all expended spell slots when it finishes a long rest. Spells Known. The sidekick knows two cantrips and one 1st-level spell of your choice from its spell list. Here are recommendations for a 1st-level spellcaster of each role:",
      expert:
        "The sidekick is adept at giving well-timed assistance; the sidekick can take the Help action as a bonus action.",
    },

    classFeatureOptions: {
      warrior: [
        {
          value: {
            name: "Martial Role",
            desc: "Attacker: The sidekick gains a +2 bonus to all attack rolls ",
          },
          label: "Attacker",
        },
        {
          value: {
            name: "Martial Role",
            desc: "Defender:  The sidekick can use its reaction to impose disadvantage on the attack roll of a creature within 5 feet of it whose target isn't the sidekick, provided the sidekick can see the attacker.",
          },
          label: "Defender",
        },
      ],
      spellcaster: [
        {
          value: {
            name: "Spellcasting",
            desc: "Mage | Spell List: Wizzard | Ability: Intelligence",
          },
          label: "Mage | Spell List: Wizzard | Ability: Intelligence",
        },
        {
          value: {
            name: "Healer",
            desc: "Healer | Spell List: Cleric/Druid | Ability: Wisdom",
          },
          label: "Healer | Spell List: Cleric/Druid | Ability: Wisdom",
        },
        {
          value: {
            name: "Prodigy",
            desc: "Prodigy | Spell List: Bard/Warlock | Ability: Charima",
          },
          label: "Prodigy | Spell List: Bard/Warlock | Ability: Charima",
        },
      ],
      expert: [],
    },
  };

  return (
    <Jumbotron>
      {/**Form level 1 ass soon as class is selected */}

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
      <Collapse in={open}>
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
            style={{ margin: "2% 2% 2% 2%" }}
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
      {/**Form level 2 if lvl >=2 */}
      {cclass && level >= 2 && <form>Form2</form>}
    </Jumbotron>
  );
}
