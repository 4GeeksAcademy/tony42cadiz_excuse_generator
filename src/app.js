import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broje"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was prayinhg"
  ];
  //Renaming Functions
  let whoItem = Math.floor(Math.random() * who.length);
  let actionItem = Math.floor(Math.random() * action.length);
  let whatItem = Math.floor(Math.random() * what.length);
  let whenItem = Math.floor(Math.random() * when.length);
  //Unifying Functions

  let excuse =
    who[whoItem] +
    " " +
    action[actionItem] +
    " " +
    what[whatItem] +
    " " +
    when[whenItem];

  document.getElementById("excuse").innerText = excuse;
};
