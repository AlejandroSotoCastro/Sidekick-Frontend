import axios from "axios";
import { apiUrl } from "../../config/constants";

export const MONSTER_FETCHED = "MONSTER_FETCHED";
export const SIDEKICK_PICKED = "SIDEKICK_PICKED";

const monsterFetched = (monster) => ({
  type: MONSTER_FETCHED,
  payload: monster,
});

const classPicked = (sidekick) => ({
  type: SIDEKICK_PICKED,
  payload: sidekick,
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
    console.log(class_index);
    dispatch(classPicked(class_index));
  };
};

export const pickLevel = (Lvl) => {
  return (dispatch, getState) => {
    //*probably getState CLASS at some point*//
    const class_index = "warrior";

    switch (class_index) {
      default:
      case "warrior":

      case "expert":
      case "spellcaster":
    }

    let sidekick = {};

    console.log(sidekick);
    dispatch(classPicked(sidekick));
  };
};
