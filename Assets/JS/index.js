let currentTime = moment(Date.now());
$("#currentDay").text(currentTime.format("dddd, MMMM, Do"));

let timeOfDayHour = "";
timeOfDayHour = moment().format("H");

console.log(timeOfDayHour)

let allCurrentTasks = JSON.parse(localStorage.getItem("storedTasks")) || [];

function displayTask() {
  for (i = 0; i < allCurrentTasks.length; i++) {
    let displayAreaID = allCurrentTasks[i][0];

    console.log("Display Area ID: " + displayAreaID);

    storedTask = allCurrentTasks[i][1];

    console.log("Stored task: " + storedTask);

    if (allCurrentTasks[i][1] != null)
      document.getElementById(displayAreaID).placeholder = storedTask;
  }
}

displayTask();

for (i = 9; i < 19; i++) {
  if (i < timeOfDayHour) {
    let tagEl1 = ".taskText-" + i;
    document.querySelector(tagEl1).style.backgroundColor = "#D3D3D3";
  } else if (i == timeOfDayHour) {
    let tagEl1 = ".taskText-" + i;
    let targetTextArea = document.querySelector(tagEl1);
    document.querySelector(tagEl1).style.backgroundColor = "#ff6961";
    console.log(tagEl1);
  }
}

function saveText(textID) {
  let textareaID = "textarea-" + textID;
  console.log("textArea ID: " + textareaID);
  let textareIDtext = document.getElementById(textareaID).value;
  console.log("The input text: " + textareaID + " " + textareIDtext);

  allCurrentTasks.unshift([textareaID, textareIDtext]);

  localStorage.setItem("storedTasks", JSON.stringify(allCurrentTasks));

  console.log(textareIDtext);
}
