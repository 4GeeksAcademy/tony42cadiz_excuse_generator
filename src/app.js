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

  let whoRan = Math.floor(Math.random() * who.length);
  let actionRan = Math.floor(Math.random() * action.length);
  let whatRan = Math.floor(Math.random() * what.length);
  let whenRan = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoRan] +
    " " +
    action[actionRan] +
    " " +
    what[whatRan] +
    " " +
    when[whenRan];

  document.getElementById("excuse").innerText = excuse;
};
