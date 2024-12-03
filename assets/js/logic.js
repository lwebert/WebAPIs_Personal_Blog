// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const lightdarkEl = document.querySelector("#lightdarkmode");

lightdarkEl.addEventListener('click', function () {
	let state = document.body.getAttribute('class');

	if (state === 'dark') {
		state = 'light';
		document.body.setAttribute('class', state);
		lightdarkEl.textContent = '☀️'

	}
	else if (state === 'light') {
		state = 'dark';
		document.body.setAttribute('class', state);
		lightdarkEl.textContent = '🌑'
	}
})

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
	// let tempLocalStorage = localStorage.getItem('');
	let storage = JSON.parse(localStorage.getItem('blogs'));

	if (storage === null) { //if it doesn't exist, it will be null
		storage = [];
	}

	return storage; //just returning the VALUE of storage, not returning as a variable/value pair
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(blog) { //function declaration syntax, can call function before line 18 due to hoisting declarations to the top of the JavaScript
	let blogdata = readLocalStorage(); //get copy of the array of blogs
	blogdata.push(blog); //add the new blog
	localStorage.setItem('blogs', JSON.stringify(blogdata)); //resave the entire array including the new blog to the local storage
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) { //function expression, can't use function until after line 25, not hoisted
	redirectURL = url;
	location.assign(url);
};
