import { LIST_OF_MONSTERS_FETCHED } from "./actions";

const initialState = [{ value: "", label: "" }];
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LIST_OF_MONSTERS_FETCHED:
      return payload;
    default:
      return state;
  }
}
