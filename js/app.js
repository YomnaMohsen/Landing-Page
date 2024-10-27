/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navlist = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// function to build the nav-menu dynamically and add scroll

function build_nav(){

// foreach loop to iterate on all sections
sections.forEach((section) => {
    let li_item = document.createElement('li');
    let anchor = document.createElement('a');
    li_item.textContent = section.dataset.nav;
    li_item.classList.add("menu__link");
    navlist.appendChild(li_item);
    // Scroll to section on link click
    li_item.addEventListener('click', function(){
        section.scrollIntoView({behavior :"smooth", block: "end"});
    });
});
}

//Function to check if element in viewport

function inviewport(elem){
    const rect= elem.getBoundingClientRect()
     return (
                rect.top >= -300 && 
                rect.left >= 0 && 
                rect.bottom <= (window.innerHeight + 300|| document.documentElement.clientHeight + 300) && 
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
            );

}

// Add class 'active' to section when near top of viewport
function makeActive(){
    const items_arr = document.getElementsByTagName('li');
    for (let i=0; i < sections.length; i++) {
        //check position of element
         if (inviewport(sections[i])) {
        //apply active state on current section and corresponding Nav link
        sections[i].classList.add("your-active-class");
        items_arr[i].classList.add("active");
        console.log(i + 1);
        } else {
        //Remove active state from other section and corresponding Nav link
        sections[i].classList.remove("your-active-class");
        items_arr[i].classList.remove("active");
        }
    }
}




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
build_nav();

// Set sections as active on scroll
window.addEventListener('scroll', makeActive);
 





