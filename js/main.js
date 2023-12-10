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
        //creating option for each state in menu
        var stateO = document.createElement('option'); 
        stateO.text = stateN;
        stateO.value = stateN;
        stateSelect.add(stateO);
    }
localStorage.setItem("stories", JSON.stringify(stories));
//created to save all inputs of form
function SaveSubmission(){
    stories = JSON.parse(localStorage.getItem("stories"))
    storyDic = {}
    let storytitle = document.getElementById("storyTitle").value;
    let storyText = document.getElementById("story").value;
    let imageInput = document.getElementById("image");
    let imageDescription = document.getElementById("imagedisc").value;
    let  stateName = stateSelect.options[stateSelect.selectedIndex].text;
    storyDic["storytitle"] = storytitle;
    storyDic["storyText"] = storyText;
    storyDic["imgAlt"] = imageDescription;
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

}
//use to update local storage of stories
function updateStories(stateN, storydic){
    let storiesA = stories[stateN];
    storiesA.push(storydic);
    stories[stateN] = storiesA;
    localStorage.setItem("stories", JSON.stringify(stories));
    console.log(JSON.parse(localStorage.getItem("stories")));
}



