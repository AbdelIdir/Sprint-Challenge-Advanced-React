import React, { Component } from "react";
import "./App.css";

export const Cards = props => {
  return (
    <div className="card">
      <b>
        <p style={{ textDecoration: "underline" }}>
          name: {props.player.name}{" "}
        </p>
      </b>
      <p>country :{props.player.country} </p>
      <p>Searches:{props.player.searches}</p>
    </div>
  );
};
