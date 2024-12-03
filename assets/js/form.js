// TODO: Create a variable that selects the form element
const formEl = document.querySelector("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmission() {
  let username = document.querySelector('#username').value; //gets us the element, want the value so use .value
  let title = document.querySelector('#title').value;
  let content = document.querySelector('#content').value;

  if (!username || title === "" || !content) { //empty string is a falsy, saying if at least 1 is empty/false
    document.querySelector('#error').style.display = "block"; //.style accessess all CSS properties for the element, .__ is whichever attribute we want to access
  }
  else {

    let blog = {
      username, title, content
    };

    storeLocalStorage(blog);

    redirectPage("blog.html");
  }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', function (event) { //submit event instead of click, for when you click on button; any button inside of form acts as a submit button
  event.preventDefault(); //button inside a form triggers the default event, which is to submit the form & refresh the page, which we don't want
  formSubmission();
})

