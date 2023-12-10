const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const state = params.get('state');
console.log(state);
let stateNP = document.getElementById("StateName");
stateNP.innerHTML = state;
stories
//function that adds roll elements to the DOM
function addingStories(story){

    let template = document.getElementById("template");
    let clone = template.content.cloneNode(true);
    story.element = clone.querySelector(".stories");// clone  roll layout

    let storyElementList = document.querySelector(".StoryL");
    storyElementList.append(story.element);

    addStory(story);
  }
  // add roll information to the DOM
  function addRoll(story){

    let imageTemp = story.element.querySelector(".Simages");
    let descTemp = story.element.querySelector(".Sdescription");


    imageTemp.src = story[imgSrc];
    imageTemp.alt =story[imgAlt];

    descTemp.innerHTML = story[storytitle] ;

    

  }
function populateStories(){
    let stories = JSON.parse(localStorage.getItem("stories")) || {};
    placeholderS = document.getElementById("placeholderS")
    if (Object.keys(stories).length ===0){ 
        d
    }
}