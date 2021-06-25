import React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

/**IMPORT SELECTORS */

import { selectToken, selectUser } from "../store/user/selectors";

/**IMPORT ACTIONS */
import { fetchUserSidekicks } from "../store/user/actions";

export default function YourSidekicks() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserSidekicks());
  }, [dispatch]);

  if (!token) {
    return (
      <div>You need to be a logged in as an artist to access this page</div>
    );
  }

  if (!user.sidekicks) {
    return <div>This should be a cool loading page </div>;
  }

  return (
    <div>
      <ul>
        {user.sidekicks.map((sidekick, index) => {
          return <li key={index}>{sidekick.sidekickName}</li>;
        })}
      </ul>
    </div>
  );
}
