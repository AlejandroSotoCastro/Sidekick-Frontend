export const level1Features = {
  savingThrowOptions: {
    warrior: [
      { value: "STR", label: "Strength" },
      { value: "DEX", label: "Dexterity" },
      { value: "CON", label: "Constitution" },
    ],
    spellcaster: [
      { value: "WIS", label: "Wisdom" },
      { value: "INT", label: "Intelligence" },
      { value: "CHA", label: "Charisma" },
    ],

    expert: [
      { value: "DEX", label: "Dexterity" },
      { value: "INT", label: "Intelligence" },
      { value: "CHA", label: "Charisma" },
    ],
  },
  skillNumOfOptions: { warrior: 2, spellcaster: 2, expert: 5 },
  otherProfOptions: {
    warrior: "shields and all simple and martial weapons.",
    spellcaster: "all simple weapons",
    expert: "all simple weapons and with two tools of your choice",
  },

  skillOptios: {
    warrior: [
      { value: "Acrobatics", label: "Acrobatics" },
      { value: "Animal_handeling", label: "Animal Handling" },
      { value: "Athletics", label: "Athletics" },
      { value: "Intimidation", label: "Intimidation" },
      { value: "Nature", label: "Nature" },
      { value: "Perception", label: "Perception" },
      { value: "Survival", label: "Survival" },
    ],
    spellcaster: [
      { value: "Arcana", label: "Arcana" },
      { value: "History", label: "History" },
      { value: "Insight", label: "Insight" },
      { value: "Investigation", label: "Investigation" },
      { value: "Medicine", label: "Medicine" },
      { value: "Performance", label: "Performance" },
      { value: "Persuasion", label: "Persuasion" },
      { value: "Religion", label: "Religion" },
    ],

    /**expert can choose from all  */
    expert: [
      { value: "Athletics", label: "Athletics" },
      { value: "Acrobatics", label: "Acrobatics" },
      { value: "Sleight_of_Hand", label: "Sleigt of hand" },
      { value: "Stealth", label: "Stealth" },
      { value: "Arcana", label: "Arcana" },
      { value: "History", label: "History" },
      { value: "Investigation", label: "Investigation" },
      { value: "Nature", label: "Nature" },
      { value: "Religion", label: "Religion" },
      { value: "Animal_Handeling", label: "Animal Handeling" },
      { value: "Insight", label: "Insight" },
      { value: "Medicine", label: "Medicine" },
      { value: "Perception", label: "Perception" },
      { value: "Survival", label: "Survival" },
      { value: "Deception", label: "Deception" },
      { value: "Intimidation", label: "Intimidation" },
      { value: "Performance", label: "Performance" },
      { value: "Persuasion", label: "Persuasion" },
    ],
  },

  classFeatureNames: {
    warrior: "MARTIAL ROLE",
    spellcaster: "SPELLCASTING",
    expert: "HELPFUL",
  },

  classFeatureText: {
    warrior: (
      <span>
        Each warrior focuses on offense or defense in their training. Choose one
        of the following options:
        <ul>
          <li>Attacker: The sidekick gains a +2 bonus to all attack rolls.</li>
          <li>
            Defender: The sidekick can use its reaction to impose disadvantage
            on the attack roll of a creature within 5 feet of it whose target
            isn't the sidekick, provided the sidekick can see the attacker.
          </li>
        </ul>
      </span>
    ),
    spellcaster:
      "The sidekick gains the ability to cast spells. (If the creature already has the Spellcasting trait, this feature replaces that trait.) Choose the Spellcaster's role: Mage, Healer, or Prodigy. This choice deter-mines the spell list and spellcasting ability used by the sidekick, as shown on the Spellcasting table. Spell Slots. The Spellcaster table shows how many spell slots the sidekick has to cast its Spell- caster spells of 1st level and higher. To cast one of these spells, the sidekick must expend a slot of the spell's level or higher. The sidekick regains all expended spell slots when it finishes a long rest. Spells Known. The sidekick knows two cantrips and one 1st-level spell of your choice from its spell list. Here are recommendations for a 1st-level spellcaster of each role:",
    expert:
      "The sidekick is adept at giving well-timed assistance; the sidekick can take the Help action as a bonus action.",
  },

  classFeatureOptions: {
    warrior: [
      {
        value: {
          name: "Martial Role",
          desc: "Attacker: The sidekick gains a +2 bonus to all attack rolls ",
        },
        label: "Attacker",
      },
      {
        value: {
          name: "Martial Role",
          desc: "Defender:  The sidekick can use its reaction to impose disadvantage on the attack roll of a creature within 5 feet of it whose target isn't the sidekick, provided the sidekick can see the attacker.",
        },
        label: "Defender",
      },
    ],
    spellcaster: [
      {
        value: {
          name: "Spellcasting",
          desc: "Mage | Spell List: Wizzard | Ability: Intelligence",
        },
        label: "Mage | Spell List: Wizzard | Ability: Intelligence",
      },
      {
        value: {
          name: "Healer",
          desc: "Healer | Spell List: Cleric/Druid | Ability: Wisdom",
        },
        label: "Healer | Spell List: Cleric/Druid | Ability: Wisdom",
      },
      {
        value: {
          name: "Prodigy",
          desc: "Prodigy | Spell List: Bard/Warlock | Ability: Charima",
        },
        label: "Prodigy | Spell List: Bard/Warlock | Ability: Charima",
      },
    ],
    expert: [],
  },
};
const level = 0;
export const level2Features = {
  classFeatureNames: {
    warrior: "SECOND WIND",
    spellcaster: "",
    expert: "CUNNING ACTION",
  },
  classFeatureText: {
    warrior:
      "The sidekick can use a bonus action on its turn to regain hit points equal to 1d10 + its level in this class. Once it uses this feature, it must finish a short or long rest before it can use it again. The sidekick can use this feature twice between rests starting at 20th level.",
    spellcaster: "",
    expert:
      "The sidekick's agility or quick thinking allows it to  act speedily. On its turn in combat, it can take the Dash, Disengage, or Hide action as a bonus action.",
  },

  classFeatureOptions: {
    warrior: {
      name: "Second Wind",
      desc: "The sidekick can use a bonus action on its turn to regain hit points equal to 1d10 +  ${level} in this class. Once it uses this feature, it must finish a short or long rest before it can use it again. The sidekick can use this feature twice between rests starting at 20th level.",
    },
    spellcaster: { name: "", desc: "" },
    expert: {
      name: "Cunning Action",
      desc: "The sidekick's agility or quick thinking allows it to  act speedily. On its turn in combat, it can take the Dash, Disengage, or Hide action as a bonus action.",
    },
  },
};

export const level3Features = {
  classFeatureNames: {
    warrior: "IMPROVED CRITICAL",
    spellcaster: "",
    expert: "EXPERTISE",
  },
  classFeatureText: {
    warrior:
      "The sidekick's attack rolls score a critical hit on a roll of 19 or 20 on the d20.",
    spellcaster: "",
    expert:
      "Choose two of the sidekick's skill proficiencies. The sidekick's proficiency bonus is doubled for any ability check it makes that uses any of the chosen proficiencies..",
  },

  classFeatureOptions: {
    warrior: {
      name: "Inproved Critical",
      desc: "The sidekick's attack rolls score a critical hit on a roll of 19 or 20 on the d20.",
    },
    spellcaster: { name: "", desc: "" },
    expert: {
      name: "Expertise",
      desc: "Choose two of the sidekick's skill proficiencies. The sidekick's proficiency bonus is doubled for any ability check it makes that uses any of the chosen proficiencies..",
    },
  },
};
