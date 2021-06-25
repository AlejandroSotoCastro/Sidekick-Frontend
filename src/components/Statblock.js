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
    <div>
      <Pdf targetRef={ref} filename="Sidekick_Charactersheet.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
      </Pdf>
      <Button
        onClick={() => {
          dispatch(saveSidekick());
        }}
      >
        Save sidekick
      </Button>
      <div className="mon-stat-block" ref={ref}>
        <img src={barbook} alt="barbook"></img>

        <div>
          <img src={top} alt="top bar"></img>
          <h2>Name: {sidekickName}</h2>
          <h2>Class: {cclass}</h2>
          <h2>Level: {level}</h2>
          <h2>Base Monster: {name}</h2>
          <span>
            {size} {type} {subtype && `(${subtype})`} {alignment}
          </span>
        </div>
        <img src={line} alt="divider-line"></img>
        <div>
          <p>Armor Class: {armor_class}</p>
          <p>
            Hit Points: {hit_dice.amount}
            {hit_dice.type}
            {" +"}
            {parseInt(hit_dice.amount) * parseInt(mod(constitution))}{" "}
          </p>
          <span>Speed: </span>
          {speedKeys.map((key) => (
            <span key={key}>
              {key}, {speed[key]}
            </span>
          ))}

          <p>Initiative: {mod(dexterity)} </p>
        </div>
        <img src={line} alt="divider-line"></img>
        <div className="abil-sub-block">
          <p>
            STR <br /> {strength} ({mod(strength)})
          </p>
          <p>
            DEX <br /> {dexterity} ({mod(dexterity)})
          </p>
          <p>
            CON <br /> {constitution} ({mod(constitution)})
          </p>
          <p>
            INT <br /> {intelligence} ({mod(intelligence)})
          </p>
          <p>
            WIS <br /> {wisdom} ({mod(wisdom)})
          </p>
          <p>
            CHA <br /> {charisma} ({mod(charisma)})
          </p>
        </div>
        <img src={line} alt="divider-line"></img>
        <div className="skill-sub-block">
          {proficiencies.length > 0 && (
            <p>
              Skills:{" "}
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
              Damage Vulnerabilities:{" "}
              {damage_vulnerabilities.map((d_vulnera, index) => (
                <span key={index}>{d_vulnera}</span>
              ))}
            </p>
          )}
          {damage_resistances.length > 0 && (
            <p>
              Damage Resistance:{" "}
              {damage_resistances.map((d_resistance, index) => (
                <span key={index}>{d_resistance}, </span>
              ))}
            </p>
          )}
          {damage_immunities.length > 0 && (
            <span>
              Damage Immunities:{" "}
              {damage_immunities.map((d_immunity, index) => (
                <span key={index}>{d_immunity}, </span>
              ))}
            </span>
          )}
          {condition_immunities.length > 0 && (
            <p>
              Condition Inmmunities:{" "}
              {condition_immunities.map((immunity, index) => (
                <span key={index}>{immunity.name}</span>
              ))}
            </p>
          )}
          Senses:{" "}
          {senseKeys.map((key) => (
            <span key={key}>
              {key}, {senses[key]}
              {", "}
            </span>
          ))}
          <span>Passive Perception: {passive_perception} </span>
          <p>Languages: {languages}</p>
          <p>Challenge Rating: {challenge_rating}</p>
          {/*TEMP */}
          <p>Proficiency Bonus: +{proficiency_bonus}</p>
        </div>
        <img src={line} alt="divider-line"></img>
        {special_abilities && special_abilities.length > 0 && (
          <div>
            Special abilities
            {special_abilities.map((ability, index) => (
              <p key={index}>
                {ability.name}: {console.log(ability.desc, { level: level })}
                {parseStringTemplate(ability.desc, { level: level })}
              </p>
            ))}
            <img src={line} alt="divider-line"></img>
          </div>
        )}

        {actions && (
          <div>
            Actions
            {actions.map((action, index) => (
              <p key={index}>
                {action.name}: {action.desc}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
