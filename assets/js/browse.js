// Get all cols with class posterContainer to get access to all pictures
let posters = document.querySelectorAll('.posterContainer');

//set active category UI
let links = document.querySelectorAll("a.nav-link.category");
for(let link of links){
    link.addEventListener('click', () => {
        for(let x of links){
            x.classList.remove("active");
        }
        link.classList.add("active");

        // Get the 'category' attribure from the button
        let category = link.getAttribute('category');
        // Memorize this filter
        localStorage.setItem('currentCategory', category);
        // Update visiblilty on all pictures
        updateFilter(category);
    });
}

// Check if we memorized a category
let currentCategory = localStorage.getItem('currentCategory');

// If we memorized a category in local storage, then cycle through all posters to disable/enable them based on their category
if (currentCategory !== null) {
    updateFilter(currentCategory);
// otherwise grab the first category from the links and use that to disable/enable posters basd on their category.
// AND then save the category into local storage.
} else {
    updateFilter(links[0].getAttribute('category'));
    localStorage.setItem('currentCategory', links[0].getAttribute('category'));
}

// Function to enable/disable posters based on their category
function updateFilter(categoryToShow) {
    posters.forEach(poster => {

        if (poster.getAttribute('category') === categoryToShow) {
            poster.style.display = 'block';
        } else {
            poster.style.display = 'none';
        }

        //set active category UI through adding/removing class "active"
        for(let link of links){
            if(link.getAttribute('category') === categoryToShow){
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
}