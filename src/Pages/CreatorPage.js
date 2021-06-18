import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";

/**IMPORT COMPONENTS */

import Statblock from "../components/Statblock";

/**IMPORT ACTIONS */
import { fetchListOfMonsters } from "../store/monsters/actions";
import { fetchMonster } from "../store/sidekick/actions";

/**IMPORT SELECTORS */
import { selectMonsters } from "../store/monsters/selectors";

export default function CreatorPage() {
  const dispatch = useDispatch();
  const monsterList = useSelector(selectMonsters);

  // console.log(monsterList);

  useEffect(() => {
    dispatch(fetchListOfMonsters("0.5"));
  }, [dispatch]);

  return (
    <div className="Statblock">
      <Select
        defaultValue={{ label: "Select Monster", value: 0 }}
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

      <Statblock />
    </div>
  );
}
