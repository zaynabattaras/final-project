//determining what state and story
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const p = params.get('stateN');
const storyN = Number(p.slice(-1));
const state = p.slice(0, -1)
console.log(state);
//getting DOM elements with Relevant Info
let storyTitle= document.getElementById("SpTitle");
let stateName=document.getElementById("StateName");
let storyText = document.querySelector(".dText");
//accesing local storage
let stories= JSON.parse(localStorage.getItem("stories"));
let storyinfoS = stories[state];
let storyinfo = storyinfoS[storyN]
console.log(storyinfo);
//updating DOM with Relevant Info
storyTitle.innerHTML = storyinfo["storytitle"];
storyText.innerHTML =  storyinfo["storyText"];
stateName.innerHTML = "State " +state;
