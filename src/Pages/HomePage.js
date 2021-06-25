import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Jumbotron
      style={{
        border: "solid",
        padding: "2% 2% 2% 2%",
        marginLeft: "10%",
        marginRight: "10%",
      }}
    >
      <p>Sidekicks are a fantastic way to let your players:</p>
      <ul>
        <li>adopt that baby blink dog they rescued</li>
        <li>balance the game if one of your players leaves</li>
        <li>just spice things up in your game</li>
      </ul>
      <p>
        {" "}
        Here you will be able to create a mostly working sidekick as by the
        "Tasha's Cauldron of Everything " companion book rules{" "}
      </p>
      <p>
        {" "}
        Disclaimer: Because the monster information we use was never meant to be
        modified there might be text that is not correctly updated.{" "}
      </p>

      <Link to={`/creator`}>
        <Button>Create your Sidekick!</Button>
      </Link>
    </Jumbotron>
  );
}
