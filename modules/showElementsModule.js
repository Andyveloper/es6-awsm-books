// Creating html elements to hide sessions
const navBarAnchors = document.getElementsByClassName('navbar-list__items');
const bookSection = document.getElementsByClassName('book-list');
const addBookSection = document.getElementsByClassName('add-book');
export const contactSection = document.getElementsByClassName('contact');
// Show the content that is clicked
export const showContent = (position) => {
  if (position === 0) {
    bookSection[0].classList.remove('hideAll');
    addBookSection[0].classList.add('hideAll');
    contactSection[0].classList.add('hideAll');
  } else if (position === 1) {
    bookSection[0].classList.add('hideAll');
    addBookSection[0].classList.remove('hideAll');
    contactSection[0].classList.add('hideAll');
  } else if (position === 2) {
    bookSection[0].classList.add('hideAll');
    addBookSection[0].classList.add('hideAll');
    contactSection[0].classList.remove('hideAll');
  }
};
// Giving the event listener to the anchor tags
for (let i = 0; i < navBarAnchors.length; i += 1) {
  navBarAnchors[i].addEventListener('click', () => {
    showContent(i);
  });
}
