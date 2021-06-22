import axios from "axios";
import { apiUrl } from "../../config/constants";

import { selectSidekick } from "./selectors";

export const MONSTER_FETCHED = "MONSTER_FETCHED";
export const SIDEKICK_PICKED = "SIDEKICK_PICKED";
export const LVL1_APPLIED = "LVL1_APPLIED";

function getStat(skill) {
  const convert = {
    Athletics: "strength",
    STR: "strength",

    Acrobatics: "dexterity",
    Sleight_of_Hand: "dexterity",
    Stealth: "dexterity",
    DEX: "dexterity",

    CON: "constitution",

    Arcana: "intelligence",
    History: "intelligence",
    Investigation: "intelligence",
    Nature: "intelligence",
    Religion: "intelligence",
    INT: "intelligence",

    Animal_Handling: "wisdom",
    Insight: "wisdom",
    Medicine: "wisdom",
    Perception: "wisdom",
    Survival: "wisdom",
    WIS: "wisdom",

    Deception: "charisma",
    Intimidation: "charisma",
    Performance: "charisma",
    Persuasion: "charisma",
    CHA: "charisma",
  };

  return convert[skill]; // => Stat (Ex: charisma)
}

const monsterFetched = (monster) => ({
  type: MONSTER_FETCHED,
  payload: monster,
});

const classPicked = (sidekick) => ({
  type: SIDEKICK_PICKED,
  payload: sidekick,
});

const lvl1applied = (features) => ({
  type: LVL1_APPLIED,
  payload: features,
});

export const fetchMonster = (monster_index) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/sidekick/${monster_index}`);
    console.log(response.data);
    dispatch(monsterFetched(response.data));
  };
};

export const pickClass = (class_index) => {
  return (dispatch, getState) => {
    dispatch(classPicked(class_index));
  };
};

export const applyLvl1 = (features) => {
  return (dispatch, getState) => {
    const { proficiencies } = selectSidekick(getState());

    //get the keys of the Object.   array.includes
    const profKeys = proficiencies.map((prof) => prof.name);
    const newFeatures = { prof: [], speciality: "" };

    if (!profKeys.includes(features.savingProf))
      newFeatures.prof.push({
        name: features.savingProf,
        stat: getStat(features.savingProf),
      });

    features.skillProf.map((skill) => {
      if (!profKeys.includes(skill)) {
        newFeatures.prof.push({ name: skill, stat: getStat(skill) });
      }
    });

    newFeatures.prof.push({
      name: " It also gains proficiency with light armor and, if it is a humanoid orhas a simple or martial weapon in its stat block, it also gains proficiency with",
      stat: "",
    });

    newFeatures.prof.push(features.otherProf);
    newFeatures.speciality = features.speciality;

    // console.log(newFeatures);

    // console.log(sidekick);
    dispatch(lvl1applied(newFeatures));
  };
};

/**PROBABLY NOT GOING TO USE THIS */
export const pickLevel = (Lvl) => {
  return (dispatch, getState) => {
    const class_index = "warrior";

    switch (class_index) {
      default:
      case "warrior":
      case "expert":
      case "spellcaster":
    }

    let sidekick = {};

    console.log(sidekick);
    //dispatch(LvL1Applied(sidekick));
  };
};
