import React from "react";
import { useState, useEffect } from "react";
import line from "../img/stat-block-header-bar.svg";
import top from "../img/stat-block-top-texture.png";
import barbook from "../img/stat-bar-book.png";
const axios = require("axios");

export default function Statblock() {
  /**Function to calculate mod bonus of an abilitiy score */
  function mod(abilityScore) {
    const modifier = Math.floor((abilityScore - 10) / 2);
    return modifier > 0 ? `+${modifier}` : modifier;
  }

  //fetch data
  const [fetechedData, set_fetechedData] = useState();

  useEffect(() => {
    /**Function to fetch data from the API */
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:4000/sidekick/aboleth"
      );
      console.log(response.data);
      set_fetechedData(response.data);
    }

    fetchData();
  }, []);

  if (!fetechedData)
    return (
      <div>
        <img src={"favicon.ico"} alt="icon"></img>
      </div>
    );

  const monster = fetechedData;
  const {
    name,
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
    <div className="mon-stat-block">
      <img src={barbook} alt="barbook"></img>
      <div>
        <img src={top} alt="top bar"></img>
        <h2>{name}</h2>
        <p>{`${size} ${type} (${subtype && subtype}), ${alignment}`}</p>
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
      <div>Special abilities</div>
      {special_abilities.map((ability, index) => (
        <p key={index}>
          {ability.name}: {ability.desc}
        </p>
      ))}
      <img src={line} alt="divider-line"></img>
      <div>Actions</div>
      {actions.map((action, index) => (
        <p key={index}>
          {action.name}: {action.desc}
        </p>
      ))}
    </div>
  );
}
