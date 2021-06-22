import { convert } from "./skill-stat-savingthrow-Map";

export function getStat(skill) {
  return convert[skill]; // => Stat (Ex: charisma)
}
