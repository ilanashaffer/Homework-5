// dom variables

const currentDate = document.querySelector('#currentDay');
const inputElement = document.querySelector('#input');
const inputElement1 = document.querySelector('#input1');
const inputElement2 = document.querySelector('#input2');
const inputElement3 = document.querySelector('#input3');
const inputElement4 = document.querySelector('#input4');
const inputElement5 = document.querySelector('#input5');
const inputElement6 = document.querySelector('#input6');
const inputElement7 = document.querySelector('#input7');
const inputElement8 = document.querySelector('#input8');
const saveButton = document.querySelector('#save');
const saveButton1 = document.querySelector('#save1');
const saveButton2 = document.querySelector('#save2');
const saveButton3 = document.querySelector('#save3');
const saveButton4 = document.querySelector('#save4');
const saveButton5 = document.querySelector('#save5');
const saveButton6 = document.querySelector('#save6');
const saveButton7 = document.querySelector('#save7');
const saveButton8 = document.querySelector('#save8');

// adding current date to header

$(currentDate).html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// function to make date live

function liveDate() {
$(currentDate).html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}
setInterval(liveDate, 1000);

// function to color code boxes according to time

if ((moment().format("HH")) > 9) {
    $(inputElement).css("background-color", "lightgrey");
} else if ((moment().format("HH")) < 9) {
    $(inputElement).css("background-color", "limegreen");
} else if ((moment().format("HH")) == 9) {
    $(inputElement).css("background-color", "red");
} else {
    alert('Error');
}

if ((moment().format("HH")) > 10) {
    $(inputElement1).css("background-color", "lightgrey");
} else if ((moment().format("HH")) < 10) {
    $(inputElement1).css("background-color", "limegreen");
} else if ((moment().format("HH")) == 10) {
    $(inputElement1).css("background-color", "red");
} else {
    alert('Error');
}

if ((moment().format("HH")) > 11) {
    $(inputElement2).css("background-color", "lightgrey");
} else if ((moment().format("HH")) < 11) {
    $(inputElement2).css("background-color", "limegreen");
} else if ((moment().format("HH")) == 11) {
    $(inputElement2).css("background-color", "red");
} else {
    alert('Error');
}

if ((moment().format("HH")) > 12) {
    $(inputElement3).css("background-color", "lightgrey");
} else if ((moment().format("HH")) < 12) {
    $(inputElement3).css("background-color", "limegreen");
} else if ((moment().format("HH")) == 12) {
    $(inputElement3).css("background-color", "red");
} else {
    alert('Error');
}

if ((moment().format("HH")) > 13) {
    $(inputElement4).css("background-color", "lightgrey");
} else if ((moment().format("HH")) < 13) {
    $(inputElement4).css("background-color", "limegreen");
} else if ((moment().format("HH")) == 13) {
    $(inputElement4).css("background-color", "red");
} else {
    alert('Error');
}

if ((moment().format("HH")) > 14) {
    $(inputElement5).css("background-color", "lightgrey");
} else if ((moment().format("HH")) < 14) {
    $(inputElement5).css("background-color", "limegreen");
} else if ((moment().format("HH")) == 14) {
    $(inputElement5).css("background-color", "red");
} else {
    alert('Error');
}

if ((moment().format("HH")) > 15) {
    $(inputElement6).css("background-color", "lightgrey");
} else if ((moment().format("HH")) < 15) {
    $(inputElement6).css("background-color", "limegreen");
} else if ((moment().format("HH")) == 15) {
    $(inputElement6).css("background-color", "red");
} else {
    alert('Error');
}

if ((moment().format("HH")) > 16) {
    $(inputElement7).css("background-color", "lightgrey");
} else if ((moment().format("HH")) < 16) {
    $(inputElement7).css("background-color", "limegreen");
} else if ((moment().format("HH")) == 16) {
    $(inputElement7).css("background-color", "red");
} else {
    alert('Error');
}

if ((moment().format("HH")) > 17) {
    $(inputElement8).css("background-color", "lightgrey");
} else if ((moment().format("HH")) < 17) {
    $(inputElement8).css("background-color", "limegreen");
} else if ((moment().format("HH")) == 17) {
    $(inputElement8).css("background-color", "red");
} else {
    alert('Error');
}

// testing

console.log(typeof (moment().format("HH")));

// render saved event upon loading

renderLastRegistered();


// add event to planner

$(saveButton).click(function(event) {
    event.preventDefault();
  
    let input = document.querySelector('#input').value;
  
      localStorage.setItem('input', input);
      renderLastRegistered();
});

$(saveButton1).click(function(event) {
    event.preventDefault();
  
    let input1 = document.querySelector('#input1').value;
  
      localStorage.setItem('input1', input1);
      renderLastRegistered();
});

$(saveButton2).click(function(event) {
    event.preventDefault();
  
    let input2 = document.querySelector('#input2').value;
  
      localStorage.setItem('input2', input2);
      renderLastRegistered();
});

$(saveButton3).click(function(event) {
    event.preventDefault();
  
    let input3 = document.querySelector('#input3').value;
  
      localStorage.setItem('input3', input3);
      renderLastRegistered();
});

$(saveButton4).click(function(event) {
    event.preventDefault();
  
    let input4 = document.querySelector('#input4').value;
  
      localStorage.setItem('input4', input4);
      renderLastRegistered();
});

$(saveButton5).click(function(event) {
    event.preventDefault();
  
    let input5 = document.querySelector('#input5').value;
  
      localStorage.setItem('input5', input5);
      renderLastRegistered();
});

$(saveButton6).click(function(event) {
    event.preventDefault();
  
    let input6 = document.querySelector('#input6').value;
  
      localStorage.setItem('input6', input6);
      renderLastRegistered();
});

$(saveButton7).click(function(event) {
    event.preventDefault();
  
    let input7 = document.querySelector('#input7').value;
  
      localStorage.setItem('input7', input7);
      renderLastRegistered();
});

$(saveButton8).click(function(event) {
    event.preventDefault();
  
    let input8 = document.querySelector('#input8').value;
  
      localStorage.setItem('input8', input8);
      renderLastRegistered();
});

// save event to planner

function renderLastRegistered() {
let input = localStorage.getItem('input');
let input1 = localStorage.getItem('input1');
let input2 = localStorage.getItem('input2');
let input3 = localStorage.getItem('input3');
let input4 = localStorage.getItem('input4');
let input5 = localStorage.getItem('input5');
let input6 = localStorage.getItem('input6');
let input7 = localStorage.getItem('input7');
let input8 = localStorage.getItem('input8');


$(inputElement).text(input);
$(inputElement1).text(input1);
$(inputElement2).text(input2);
$(inputElement3).text(input3);
$(inputElement4).text(input4);
$(inputElement5).text(input5);
$(inputElement6).text(input6);
$(inputElement7).text(input7);
$(inputElement8).text(input8);
};