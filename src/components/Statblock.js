import React from "react";
import line from "../img/stat-block-header-bar.svg";
import top from "../img/stat-block-top-texture.png";
import { useState, useEffect } from "react";
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
      set_fetechedData(response.data);
    }

    fetchData();
  }, []);
  if (!fetechedData) return <div>hola</div>;
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
    damage_vulnerabilities,
    damage_resistances,
    damage_immunities,
    condition_immunities,
    senses,
    languages,
    challenge_rating,
    special_abilities,
  } = monster;

  console.log(monster);

  return (
    <div className="mon-stat-block">
      <div>
        <img src={top}></img>
        <h2>{name}</h2>
        <p>{`${size} ${type} (${subtype}) , ${alignment}`}</p>
      </div>
      <img src={line}></img>
      <div>
        <p>Armor Class {armor_class}</p>
        <p>Hit Points {hit_dice} </p>
        <p>
          Speed {speed.walk}, fly {speed.fly}{" "}
        </p>
        <p>Roll Initiative {mod(dexterity)} </p>
      </div>
      <img src={line}></img>
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
      <img src={line}></img>
      <div className="skill-sub-block">
        <p>Skills </p>
        {damage_vulnerabilities && <p> {"damage_vulnerabilities"}</p>}
        {damage_resistances && <p> {damage_vulnerabilities}</p>}
        <p>Damage Resistance</p>
      </div>
      <img src={line}></img>
      <div>special abilities</div>
      <img src={line}></img>
      <div>Actions</div>
    </div>
  );
}
