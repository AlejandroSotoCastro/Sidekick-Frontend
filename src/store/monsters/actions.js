import axios from "axios";
import { apiUrl } from "../../config/constants";

export const LIST_OF_MONSTERS_FETCHED = "LIST_OF_MONSTERS_FETCHED";

const listOfMonstersFetched = (monsters_list) => ({
  type: LIST_OF_MONSTERS_FETCHED,
  payload: monsters_list,
});

export const fetchListOfMonsters = (chalengeRating) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${apiUrl}/sidekick/monsters-list/${chalengeRating}`
    );
    dispatch(listOfMonstersFetched(response.data));
  };
};
