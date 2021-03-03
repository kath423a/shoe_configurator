"use strict";

//Adding a global variable
let elementToPaint;

document.addEventListener("DOMContentLoaded", start);

async function start() {
  let response = await fetch("shoe_configurator_final-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;

  startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
  //Add mouse events to relevant g-elements (g_interactive) with querySelectorAll foreach
  document.querySelectorAll(".g_to_interact").forEach((eachG) => {
    console.log(eachG);

    eachG.addEventListener("click", the_click);
    eachG.addEventListener("mouseover", the_mouseover);
    eachG.addEventListener("mouseout", the_mouseout);
  });

  document.querySelectorAll(".color_btn").forEach((each_BTN) => {
    each_BTN.addEventListener("click", colorClick);
  });
}

function the_click() {
  elementToPaint = this;
  this.style.fill = "grey";
}

function the_mouseover() {
  console.log(this);

  this.style.stroke = "blue";
}

function the_mouseout() {
  this.style.stroke = "none";
}

function colorClick() {
  console.log("CLICK", this.getAttribute("fill"));
  if (elementToPaint != undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
