import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id='about'>
    <h2>About Me</h2>
    <p>Graduate of the University of California, Santa Cruz.</p>
    <img src={image} alt='I made this'/>
  </div>
  )
}

export default About;
