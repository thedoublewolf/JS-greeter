//Our Greeting Function
var greeting = function (name) {
	return 'Hello ' + name;
};

//Grab My Elements
var nameInput = document.querySelector('#your-name');
var greetBtn = document.querySelector('#greetme');
var helloElem = document.querySelector('#greeting');

// variable declarations
var fullName, greetingText;

//Function to Perform the Greeting
var greetMe = function () {
	fullName = nameInput.value;
	greetingText = greeting(fullName);
	helloElem.textContent = greetingText;
};

// Button Click
greetBtn.addEventListener('click', greetMe);
