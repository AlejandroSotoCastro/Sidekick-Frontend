import { MONSTER_FETCHED } from "./actions";

const initialState = {
  index: "Monster",
  name: "Monster",
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
      console.log("hey");

      return payload;
    default:
      console.log("ho");
      return state;
  }
}
