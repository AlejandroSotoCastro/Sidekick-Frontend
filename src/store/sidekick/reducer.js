import { MONSTER_FETCHED } from "./actions";
import { SIDEKICK_PICKED } from "./actions";
import { LEVEL_PICKED } from "./actions";
import { LVL1_APPLIED } from "./actions";
import { LVL2_APPLIED } from "./actions";
import { LVL3_APPLIED } from "./actions";

const initialState = {
  index: "Monster",
  name: "Monster",
  sidekickName: "",
  cclass: "",
  level: 1,
  size: "",
  type: "",
  subtype: "",
  alignment: "",
  armor_class: null,
  hit_points: null,
  hit_dice: { type: "", amount: "" },
  speed: { walk: "" },
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  proficiencies: [{ name: "", stat: "" }],
  damage_vulnerabilities: [],
  damage_resistances: [""],
  damage_immunities: [""],
  condition_immunities: [{ index: "", name: "" }],
  senses: {},
  languages: "",
  challenge_rating: 0,
  xp: 0,
  special_abilities: [
    {
      name: "",
      desc: "",
    },
  ],
  actions: [{}],

  proficiency_bonus: 2,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case MONSTER_FETCHED:
      return {
        ...payload,
        sidekickName: state.sidekickName,
        cclass: state.cclass,
        level: state.level,
      };

    case SIDEKICK_PICKED:
      return { ...state, cclass: payload };

    case LEVEL_PICKED:
      return { ...state, level: payload };

    case LVL1_APPLIED:
      return {
        ...state,
        proficiencies: [...state.proficiencies, ...payload.prof],
        special_abilities: [...state.special_abilities, payload.speciality],
      };

    case LVL2_APPLIED:
      return {
        ...state,
        special_abilities: [...state.special_abilities, payload],
      };
    case LVL3_APPLIED:
      return {
        ...state,
        special_abilities: [...state.special_abilities, payload],
      };
    default:
      return state;
  }
}
