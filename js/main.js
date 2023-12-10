console.log("here");
//dictionary of all story submissions per state
let stories = JSON.parse(localStorage.getItem("stories")) || {};
let stateFeatures = statesData.features
let stateSelect = document.getElementById("state-select");
//adds array for each state  to stories dictionary and dynamically adds option for state in Stories Submission Form
let populateStates = false;
if (Object.keys(stories).length ===0){ 
    populateStates = true;
}
    for (let i = 0; i< stateFeatures.length; i++){
       
        let dicTemp = stateFeatures[i];
        let stateN = dicTemp.properties.name;
        //create array for each story dictionary
        if (populateStates){ 
            stories[stateN] = [];
        }
        var stateO = document.createElement('option'); 
        stateO.text = stateN;
        stateO.value = stateN;
        stateSelect.add(stateO);
    }
localStorage.setItem("stories", JSON.stringify(stories));

function SaveSubmission(){
    stories = JSON.parse(localStorage.getItem("stories"))
    storyDic = {}
    let storytitle = document.getElementById("storyTitle").value;
    let storyText = document.getElementById("story").value;
    let imageInput = document.getElementById("image");
    let imageDescription = document.getElementById("imagedisc").value;
    let  stateName = stateSelect.options[stateSelect.selectedIndex].text;
    //console.log(storytitle);
   // console.log(storyText);
   // console.log(imageInput);
    //console.log(stateName);
    storyDic["storytitle"] = storytitle;
    storyDic["storyText"] = storyText;
    storyDic["imgAlt"] = imageDescription;
    //storyDic["imgSrc"] = "";
    //how to use filereader
    //https://javascript.info/file
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        console.log("in if")
        //how to use filereader for images
        //https://www.javascripttutorial.net/web-apis/javascript-filereader/
        reader.onload = function (e) {
            console.log("in loader");
            imagesrc = e.target.result;
            storyDic["imgSrc"] = imagesrc;
            updateStories(stateName, storyDic)
        };
       reader.readAsDataURL(imageInput.files[0]);
    };
    //stories[stateName] = stories[stateName].push(storyDic);
    //console.log(Object.keys(storyDic));
   // let storiesA = stories[stateName];
   // storiesA.push(storyDic);
    //stories[stateName] = storiesA;
   // console.log(stories)
    //localStorage.setItem("stories", JSON.stringify(stories));
    //console.log(JSON.parse(localStorage.getItem("stories")));
}

function updateStories(stateN, storydic){
    let storiesA = stories[stateN];
    storiesA.push(storydic);
    stories[stateN] = storiesA;
    localStorage.setItem("stories", JSON.stringify(stories));
    console.log(JSON.parse(localStorage.getItem("stories")));
}
//console.log(stories["Al-Jazeera"])
//localStorage.clear();