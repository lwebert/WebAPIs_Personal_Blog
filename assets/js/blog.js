// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector("main");
const backEl = document.querySelector("#back");


// TODO: Create a function that builds an element and appends it to the DOM
function createBlogPostEl(username, title, content) {

    const articleEl = document.createElement("article");
    articleEl.classList.add("card");

    const h2El = document.createElement("h2");
    const blockquoteEl = document.createElement("blockquote");
    const pEl = document.createElement("p");

    h2El.textContent = title;
    blockquoteEl.textContent = content;
    pEl.textContent = "Posted by: " + username;

    articleEl.appendChild(h2El);
    articleEl.appendChild(blockquoteEl);
    articleEl.appendChild(pEl);

    mainEl.appendChild(articleEl);
}


// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    let blogs = readLocalStorage();
    if (blogs.length === 0) {
        // const h1El = document.createElement("h1");
        // h1El.setAttribute('style', 'color:black');
        mainEl.textContent = "No Blog posts yet..."

        // mainEl.appendChild(h1El);
    }
};


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    let blogs = readLocalStorage();

    if (blogs.length === 0) {

        noPosts();
    }
    else {
        for (i = 0; i < blogs.length; i++) {
            let tempusername = blogs[i].username;
            let temptitle = blogs[i].title;
            let tempcontent = blogs[i].content;

            createBlogPostEl(tempusername, temptitle, tempcontent);
        }
    }
};


// TODO: Call the `renderBlogList` function
renderBlogList();


// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backEl.addEventListener('click', function (event) {
    event.preventDefault();
    redirectPage("index.html");
});
