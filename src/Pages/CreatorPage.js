import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/**IMPORT BOOTSTRAP & REACT-SELECT*/
import Select from "react-select";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

/**IMPORT COMPONENTS */
import Statblock from "../components/Statblock";
import Editor from "../components/Editor/Editor";

/**IMPORT ACTIONS */
import { fetchListOfMonsters } from "../store/monsters/actions";
import {
  fetchMonster,
  pickLevel,
  pickClass,
  pickName,
} from "../store/sidekick/actions";

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
      <InputGroup size="lg" className="mb-3">
        <FormControl
          placeholder="Sidekick Name"
          aria-label="Sidekick Name"
          aria-describedby="basic-addon1"
          onChange={(event) => dispatch(pickName(event.target.value))}
        />
      </InputGroup>
      <Select
        placeholder="Select Class"
        onChange={(text) => dispatch(pickClass(text.value))}
        options={[
          { value: "warrior", label: "Warrior" },
          { value: "expert", label: "Expert" },
          { value: "spellcaster", label: "Spellcaster" },
        ]}
      />

      <Select
        placeholder="Search for Monster"
        onChange={(text) => dispatch(fetchMonster(text.value))}
        options={monsterList}
      />

      <Select
        placeholder="Sidekick level"
        defaultValue={{ value: 1, label: "Level 1" }}
        onChange={(text) => dispatch(pickLevel(text.value))}
        options={[
          { value: 1, label: "Level 1" },
          { value: 2, label: "Level 2" },
          { value: 3, label: "Level 3" },
        ]}
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
