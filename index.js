import { createProfile } from "./profile.js";
import { Profile } from "./profile.js";


let profile = new Profile('Aki', 24);

console.log(profile.greetings());

document.getElementById("app").innerText = profile.greetings();
