import React from "react";
import Links from './Links'; 

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.trim() !== '' ? (
        <p>{props.bio}</p>
      ) : (
        null
      )}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.github}>{props.github}</a>
      <br />
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default About;
