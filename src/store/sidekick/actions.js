import axios from "axios";
import { apiUrl } from "../../config/constants";

export const MONSTER_FETCHED = "MONSTER_FETCHED";

const monsterFetched = (monster) => ({
  type: MONSTER_FETCHED,
  payload: monster,
});

export const fetchMonster = (monster_index) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/sidekick/${monster_index}`);
    console.log(response.data);
    dispatch(monsterFetched(response.data));
  };
};
