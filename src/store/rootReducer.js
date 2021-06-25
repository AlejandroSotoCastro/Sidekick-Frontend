import { combineReducers } from "redux";
// import appState from "./appState/reducer";
// import user from "./user/reducer";
import sidekick from "./sidekick/reducer";
import monsters from "./monsters/reducer";
import user from "./user/reducer";
import appState from "./appState/reducer";

// import artworkDetails from "./artworkDetails/reducer";

export default combineReducers({
  appState,

  user,
  sidekick,
  monsters,
});
