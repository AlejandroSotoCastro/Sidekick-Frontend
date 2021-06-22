import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/**IMPORT BOOTSTRAP & REACT-SELECT*/
import Select from "react-select";
import Container from "react-bootstrap/Container";

/**IMPORT COMPONENTS */
import Statblock from "../components/Statblock";
import Editor from "../components/Editor/Editor";

/**IMPORT ACTIONS */
import { fetchListOfMonsters } from "../store/monsters/actions";
import { fetchMonster } from "../store/sidekick/actions";
import { pickClass } from "../store/sidekick/actions";

/**IMPORT SELECTORS */
import { selectMonsters } from "../store/monsters/selectors";
import { selectSidekick } from "../store/sidekick/selectors";

export default function CreatorPage() {
  const dispatch = useDispatch();
  const monsterList = useSelector(selectMonsters);
  const sidekick = useSelector(selectSidekick);
  const { index, cclass } = sidekick;

  // console.log(monsterList);

  useEffect(() => {
    dispatch(fetchListOfMonsters("0.5"));
  }, [dispatch]);

  return (
    <Container className="Statblock">
      <Select
        placeholder="Select Class"
        onChange={(text) => dispatch(pickClass(text.value))}
        options={[
          { value: "warrior", label: "Warrior" },
          { value: "expert", label: "Expert" },
          { value: "spellcaster", label: "Spellcaster" },
        ]}
        styles={{
          option: (provided, state) => ({
            ...provided,
            color: "black",
            padding: 20,
          }),
        }}
      />

      <Select
        placeholder="Search for Monster"
        onChange={(text) => dispatch(fetchMonster(text.value))}
        options={monsterList}
        styles={{
          option: (provided, state) => ({
            ...provided,
            color: "black",
            padding: 20,
          }),
        }}
      />
      {cclass && index !== "Monster" && (
        <Container>
          <Editor />
          <Statblock />
        </Container>
      )}
    </Container>
  );
}
