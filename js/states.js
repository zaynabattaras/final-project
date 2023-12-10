//finding url parameter to know what state
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const state = params.get('state');
//changing title based off of state
let stateNP = document.getElementById("StateName");
stateNP.innerHTML = state;
//function that adds story elements to the DOM
function addingStories(story,i){

    let template = document.getElementById("template");
    let clone = template.content.cloneNode(true);
    story.element = clone.querySelector(".stories");// clone  roll layout

    let storyElementList = document.querySelector(".StoryL");
    storyElementList.append(story.element);

    addstory(story,i);
  }

  // add relevant story information to the DOM
  function addstory(story,i){
    let descTemp = story.element.querySelector(".Sdescription");
    let storyURl=  story.element.querySelector("#storyurl");
    storyURl.href= "stories.html?stateN="+state +i;
    descTemp.innerHTML = story["storytitle"] ;

    

  }
 //function that adds each story to the DOM
function populateStories(){
    let stories = JSON.parse(localStorage.getItem("stories")) || {};
    if (Object.keys(stories).length >=0){ 
        let stateStories = stories[state];
        for (let i = 0; i<stateStories.length; i++){
            let index =i;
            addingStories(stateStories[index],index);
        }
    }
  
}
populateStories();