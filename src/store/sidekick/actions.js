import axios from "axios";
import { apiUrl } from "../../config/constants";

import { selectSidekick } from "./selectors";

import { getStat } from "../../config/HelperFunctions";

export const MONSTER_FETCHED = "MONSTER_FETCHED";
export const SIDEKICK_PICKED = "SIDEKICK_PICKED";
export const NAME_PICKED = "NAME_PICKED";
export const LEVEL_PICKED = "LEVEL_PICKED";

export const LVL1_APPLIED = "LVL1_APPLIED";
export const LVL2_APPLIED = "LVL2_APPLIED";
export const LVL3_APPLIED = "LVL3_APPLIED";

const monsterFetched = (monster) => ({
  type: MONSTER_FETCHED,
  payload: monster,
});

const classPicked = (sidekick_class) => ({
  type: SIDEKICK_PICKED,
  payload: sidekick_class,
});

const namePicked = (sidekick_name) => ({
  type: NAME_PICKED,
  payload: sidekick_name,
});

const levelPicked = (level) => ({
  type: LEVEL_PICKED,
  payload: level,
});

const lvl1applied = (features) => ({
  type: LVL1_APPLIED,
  payload: features,
});

const lvl2applied = (features) => ({
  type: LVL2_APPLIED,
  payload: features,
});

const lvl3applied = (features) => ({
  type: LVL3_APPLIED,
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

export const pickName = (sidekick_name) => {
  return (dispatch, getState) => {
    dispatch(namePicked(sidekick_name));
  };
};

export const pickLevel = (Lvl) => {
  return (dispatch, getState) => {
    dispatch(levelPicked(Lvl));
  };
};

export const applyLvl1 = (features) => {
  return (dispatch, getState) => {
    const { proficiencies } = selectSidekick(getState());

    //get the keys of the Object.   array.includes
    const profKeys = proficiencies.map((prof) => prof.name);
    const newFeatures = { prof: [] };

    if (!profKeys.includes(features.savingProf))
      newFeatures.prof.push({
        name: features.savingProf,
        stat: getStat(features.savingProf),
      });

    features.skillProf.map((skill) => {
      if (!profKeys.includes(skill)) {
        newFeatures.prof.push({ name: skill, stat: getStat(skill) });
      }
      return null;
    });

    newFeatures.prof.push({
      name: " It also gains proficiency with light armor and, if it is a humanoid orhas a simple or martial weapon in its stat block, it also gains proficiency with",
      stat: "",
    });

    newFeatures.prof.push(features.otherProf);

    if (features.speciality) newFeatures.speciality = features.speciality;

    console.log(newFeatures);

    // console.log(sidekick);
    dispatch(lvl1applied(newFeatures));
  };
};

export const applyLvl2 = (features) => {
  return (dispatch, getState) => {
    dispatch(lvl2applied(features));
  };
};

export const applyLvl3 = (features) => {
  return (dispatch, getState) => {
    dispatch(lvl3applied(features));
  };
};
