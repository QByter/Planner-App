let currentTime = moment(Date.now());
$("#currentDay").text(currentTime.format("dddd, MMMM, Do"));

let timeOfDayHour = "";
timeOfDayHour = moment().format("H");

let allCurrentTasks=JSON.parse(localStorage.getItem("storedTasks"))


if (localStorage.length === 0) {
  allCurrentTasks = [];
} else{

}

// let timerInterval = setInterval(function () {
//   console.log(timeOfDayHour);

//   timeColorTextArea();

// }, 1000);

// function timeColorTextArea(){

for (i = 9; i < 19; i++) {
  if (i < timeOfDayHour) {
    let tagEl1 = ".taskText-" + i;
    let targetTextArea = document.querySelector(tagEl1);
    // document.querySelector(tagEl1).backgroundColor = "#D3D3D3";
    // document.querySelector(tagEl1).setAttribute.backgroundColor = "#D3D3D3";
    // targetTextArea.setAttribute.backgroundColor = "#D3D3D3";

  } 

else if (i == timeOfDayHour) {
let tagEl1 = ".taskText-" + i;
 let targetTextArea = document.querySelector(tagEl1);
  // document.querySelector(tagEl1)style.backgroundColor = "#FFa590";
  // document.querySelector(tagEl1).settAttribute.backgroundColor = "#FFa590";
  // targetTextArea.settAttribute.backgroundColor = "#FFa590";

}

  // console.log(tagEl1);
}
// #FFCCCB




// document.addEventListener("click",function(event){
// // console.log(event.target.parentElement.id);
// let parent = event.target.parentElement.id;
// let parentSelector = "#"+parent;
// let sibling = document.querySelector(parentSelector).firstChild;
// console.log(parent);
// console.log(sibling);

// });



function saveText(textID) {
let textareaID = "textarea-"+textID;
console.log(textareaID)
let textareIDtext = document.getElementById(textareaID).value;
allCurrentTasks.push([textareaID,textareIDtext]);
localStorage.setItem("storedTasks", JSON.stringify(allCurrentTasks));
console.log(textareIDtext)


}



