const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const state = params.get('state');
let stateNP = document.getElementById("StateName");
stateNP.innerHTML = state;
//function that adds story elements to the DOM
console.log(JSON.parse(localStorage.getItem("stories")))
function addingStories(story,i){

    let template = document.getElementById("template");
    let clone = template.content.cloneNode(true);
    story.element = clone.querySelector(".stories");// clone  roll layout

    let storyElementList = document.querySelector(".StoryL");
    storyElementList.append(story.element);

    addstory(story,i);
  }
  // add roll information to the DOM
  function addstory(story,i){

    //let imageTemp = story.element.querySelector(".Simages");
    let descTemp = story.element.querySelector(".Sdescription");
    let storyURl=  story.element.querySelector("#storyurl");
   // imageTemp.src = story[imgSrc];
    //imageTemp.alt =story[imgAlt];
    storyURl.href= "stories.html?stateN="+state +i;
    descTemp.innerHTML = story["storytitle"] ;

    

  }
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