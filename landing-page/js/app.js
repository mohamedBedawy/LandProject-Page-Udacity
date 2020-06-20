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
 * Define Global Variables
 * 
*/
    const All_Sections = document.querySelectorAll('section')
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

// build the nav
/**
 * First Get Ul List To Add Navigation Items
 * then foreach for all Section @global{ All_Sections}
 *  then create li item 
 *  then create anchor
 *  then set Attribue href with Id of the Section 
 *  check if the section is the first ==0
 *  if valid add active class for both section and li
 * then append anchor to li 
 * then add li to ul List 
 */
 const navbarlist =document.querySelector('#navbar__list');

       All_Sections.forEach((item,i)=>{
        let newNavItem = document.createElement('li');
            newNavItem.addEventListener('click',(event)=>setActive(event))
            newNavItem.classList.add('menu__link');
        let newanchor = document.createElement('a');
            newanchor.textContent =item.id;
            newanchor.setAttribute('href','#'+item.id)
            if (i==0) {
                // Set sections as active
                item.classList.add('active');
                // Set navigation Item as active
                newNavItem.classList.add('active');
                // Scroll to section 
                item.scrollIntoView();
            }
            newNavItem.appendChild(newanchor);
            navbarlist.appendChild(newNavItem);
       });
       
function setActive(event){
    const currentActives = document.querySelectorAll('.active')
                          .forEach((item)=>item.classList.toggle('active'));
    event.currentTarget.classList.add('active');
    const sectionName = event.target.textContent;
    // Add class 'active' to section when near top of viewport
    document.querySelector('#'+sectionName).classList.add('active');
    // Scroll to anchor ID using scrollTO event
    document.querySelector('#'+sectionName).scrollIntoView();
}




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// add scroll event listener to body
// add scroll top button
let topButton = document.createElement('div');
window.onscroll= function() {functioScroll()}

function functioScroll(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.classList.remove('hide');
      } else {
        topButton.classList.add('hide');
      }
}

//add class to button
topButton.classList.add('topButton');
//add hidden class to button for first Time when active first Section
topButton.classList.add('hide');
topButton.textContent ="<<";
topButton.addEventListener('click',(event)=>goToTop(event));

document.body.appendChild(topButton);

function goToTop(event){
    // set scroll to top 1
    document.documentElement.scrollTop = 1
    // another method can scroll to top
    // document.body.scrollIntoView();
}




