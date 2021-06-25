import React from "react";

import { useSelector, useDispatch } from "react-redux";
import Pdf from "react-to-pdf";

/**IMPORT HELPER FUNCTIONS */

import { parseStringTemplate } from "../config/HelperFunctions";

/**IMPORT ACTIONS */
import { saveSidekick } from "../store/user/actions";

/**IMPORT SELECTORS */
import { selectSidekick } from "../store/sidekick/selectors";

/**IMPORT IMAGES */
import line from "../img/stat-block-header-bar.svg";
import top from "../img/stat-block-top-texture.png";
import barbook from "../img/stat-bar-book.png";

/**IMPORT BOOTSTRAP & REACT-SELECT*/

import Button from "react-bootstrap/Button";
const ref = React.createRef();

export default function Statblock() {
  /**Function to calculate mod bonus of an abilitiy score */
  function mod(abilityScore) {
    const modifier = Math.floor((abilityScore - 10) / 2);
    return modifier > 0 ? `+${modifier}` : modifier;
  }

  //fetch data
  const sidekick = useSelector(selectSidekick);
  const dispatch = useDispatch();

  if (!sidekick.index)
    return (
      <div>
        <img src={"favicon.ico"} alt="icon"></img>
      </div>
    );

  const monster = sidekick;
  const {
    name,
    sidekickName,
    cclass,
    level,
    size,
    type,
    subtype,
    alignment,
    armor_class,
    hit_dice,
    speed,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    proficiencies,
    proficiency_bonus,
    damage_vulnerabilities,
    damage_resistances,
    damage_immunities,
    condition_immunities,
    senses,
    languages,
    challenge_rating,
    special_abilities,
    actions,
  } = monster;

  const speedKeys = Object.keys(speed); // ['walk', 'fly'..]
  const senseKeys = Object.keys(senses);
  const passive_perception = 10 + parseInt(mod(wisdom));
  // const conImKeys = Object.keys(condition_immunities); // ['walk', 'fly'..]

  console.log(monster);

  return (
    <div className="Stat-Block-General">
      <Pdf targetRef={ref} filename="Sidekick_Charactersheet.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
      </Pdf>
      <Button
        style={{ margin: "0% 2% 0% 2%" }}
        onClick={() => {
          dispatch(saveSidekick());
        }}
      >
        Save sidekick
      </Button>

      <div className="mon-stat-block" ref={ref}>
        <div style={{ marginTop: "5px" }}>
          <h2 style={{ paddingTop: "7px" }}>
            <strong>Name:</strong> {sidekickName}
          </h2>
          <h2>
            <strong>Class:</strong> {cclass}
          </h2>
          <h2>
            <strong>Level:</strong> {level}
          </h2>
          <h2>
            <strong>Base Monster:</strong> {name}
          </h2>
          <span>
            {size} {type} {subtype && `(${subtype})`} {alignment}
          </span>
        </div>
        <img src={line} alt="divider-line"></img>
        <div>
          <p>
            <strong>Armor Class: </strong>
            {armor_class}
          </p>
          <p>
            <strong>Hit Points: </strong> {hit_dice.amount}
            {hit_dice.type}
            {" +"}
            {parseInt(hit_dice.amount) * parseInt(mod(constitution))}{" "}
          </p>
          <span>
            {" "}
            <strong>Speed: </strong>
          </span>
          {speedKeys.map((key) => (
            <span key={key}>
              {key}, {speed[key]}
            </span>
          ))}

          <p>
            {" "}
            <strong>Initiative: </strong> {mod(dexterity)}{" "}
          </p>
        </div>
        <img src={line} alt="divider-line"></img>
        <div className="abil-sub-block">
          <p className="ability-block__stat">
            <strong>STR</strong> <br /> {strength} ({mod(strength)})
          </p>
          <p className="ability-block__stat">
            <strong>DEX</strong> <br /> {dexterity} ({mod(dexterity)})
          </p>
          <p className="ability-block__stat">
            <strong>CON</strong> <br /> {constitution} ({mod(constitution)})
          </p>
          <p className="ability-block__stat">
            <strong>INT</strong> <br /> {intelligence} ({mod(intelligence)})
          </p>
          <p className="ability-block__stat">
            <strong>WIS</strong> <br /> {wisdom} ({mod(wisdom)})
          </p>
          <p className="ability-block__stat">
            <strong>CHA</strong> <br /> {charisma} ({mod(charisma)})
          </p>
        </div>
        <img src={line} alt="divider-line"></img>
        <div className="skill-sub-block">
          {proficiencies.length > 0 && (
            <p>
              <strong>Skills: </strong>
              {proficiencies.map((proficiency, index) => (
                <span key={index}>
                  {proficiency.name}{" "}
                  {proficiency_bonus + parseInt(mod(monster[proficiency.stat]))}
                  {", "}
                </span>
              ))}
            </p>
          )}
          {damage_vulnerabilities.length > 0 && (
            <p>
              <strong>Damage Vulnerabilities:</strong>{" "}
              {damage_vulnerabilities.map((d_vulnera, index) => (
                <span key={index}>{d_vulnera}</span>
              ))}
            </p>
          )}
          {damage_resistances.length > 0 && (
            <p>
              <strong>Damage Resistance: </strong>{" "}
              {damage_resistances.map((d_resistance, index) => (
                <span key={index}>{d_resistance}, </span>
              ))}
            </p>
          )}
          {damage_immunities.length > 0 && (
            <span>
              <strong>Damage Immunities:</strong>{" "}
              {damage_immunities.map((d_immunity, index) => (
                <span key={index}>{d_immunity}, </span>
              ))}
            </span>
          )}
          {condition_immunities.length > 0 && (
            <p>
              <strong>Condition Inmmunities:</strong>{" "}
              {condition_immunities.map((immunity, index) => (
                <span key={index}>{immunity.name}</span>
              ))}
            </p>
          )}
          <strong>Senses:</strong>{" "}
          {senseKeys.map((key) => (
            <span key={key}>
              {key}, {senses[key]}
              {", "}
            </span>
          ))}
          <span>
            <strong>Passive Perception: </strong>
            {passive_perception}{" "}
          </span>
          <p>
            <strong>Languages: </strong> {languages}
          </p>
          <p>
            <strong>Challenge Rating: </strong> {challenge_rating}
          </p>
          {/*TEMP */}
          <p>
            <strong>Proficiency Bonus:</strong> +{proficiency_bonus}
          </p>
        </div>
        <img src={line} alt="divider-line"></img>
        {special_abilities && special_abilities.length > 0 && (
          <div>
            <h3>
              <strong>Special abilities</strong>
            </h3>
            {special_abilities.map((ability, index) => (
              <p key={index}>
                <strong>{ability.name}:</strong>{" "}
                {console.log(ability.desc, { level: level })}
                {parseStringTemplate(ability.desc, { level: level })}
              </p>
            ))}
            <img src={line} alt="divider-line"></img>
          </div>
        )}

        {actions && (
          <div>
            <h3>
              <strong>Actions</strong>
            </h3>

            {actions.map((action, index) => (
              <p key={index}>
                <strong>{action.name}:</strong> {action.desc}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
