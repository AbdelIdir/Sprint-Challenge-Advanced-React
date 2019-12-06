import React, { Component } from "react";
import "./App.css";

export const Cards = props => {
  return (
    <div className="card">
      <p>name: {props.player.name} </p>
      <p>country :{props.player.country} </p>
    </div>
  );
};
