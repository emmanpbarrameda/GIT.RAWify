

//PUBLIC VARIABLES
const convertInputs_ALL = document.querySelectorAll(".convert__input");
const convertBtns_ALL = document.querySelectorAll(".convert__btn");
const convertBtns = document.querySelector('.convert__btn');
const inputtedText = document.querySelector('.inputted__text');
const convertedText = document.querySelector('.converted__text');





/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    // Add show-menu class
    navMenu.classList.add("show-menu");

    // Add animation class
    navMenu.classList.add("animate__animated", "animate__fadeIn", "animate__faster");

    // Remove animation class after a delay
    setTimeout(() => {
      navMenu.classList.remove("animate__animated", "animate__fadeIn", "animate__faster");
    }, 1000); // Adjust the delay as needed
  });
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));






/*==================== DISABLE SAVING OF THIS IMAGES ====================*/

document.addEventListener('contextmenu', function (event) {
  var targetElement = event.target;
  if (
    (targetElement.tagName === 'IMG' && targetElement.classList.contains('about__img')) ||
    (targetElement.tagName === 'IMG' && targetElement.classList.contains('footer__logo_image'))
  ) {
    event.preventDefault();
    return false;
  }
});





/*==================== POPUPUP MODAL ====================*/

// Select all the modal views, modal buttons, and modal close buttons
const modalViews = document.querySelectorAll(".popup__modal"),
  modalBtns_ReadMore = document.querySelectorAll(".popup__button__clicker"),
  modalCloses = document.querySelectorAll(".popup__modal-close");


// Function to open a modal view WITH ANIMATION
let modal = function (modalClick) {
  // Remove active-modal class from all modal views
  for (var i = 0; i < modalViews.length; i++) {
    modalViews[i].classList.remove("active-modal", "animate__animated", "animate__fadeIn", "animate__faster");
  }

  // Delay adding the animation classes to ensure animation triggers consistently
  setTimeout(function () {
    // Add active-modal class to the clicked modal view and animate it
    modalViews[modalClick].classList.add("active-modal", "animate__animated", "animate__fadeIn", "animate__faster");
  }, 10);

  // Add a class to disable scrolling on the body
  document.body.classList.add("disable-scroll");
};


// Attach click event listeners to the modal buttons
modalBtns_ReadMore.forEach((modalBtn1, i) => {
  modalBtn1.addEventListener("click", () => {
    modal(i); // Open the corresponding modal view
  });
});


// Attach click event listeners to the modal close buttons
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", closeModal);
});


// Function to close the modal view WITH ANIMATION
function closeModal() {
  const activeModal = document.querySelector(".active-modal");
  if (activeModal) {
    // Add fade-out animation class to the active modal view
    activeModal.classList.add("animate__animated", "animate__fadeOut", "animate__faster");

    // Remove the modal and animation classes after the animation finishes
    setTimeout(function () {
      activeModal.classList.remove("active-modal", "animate__animated", "animate__fadeOut", "animate__faster");
      document.body.classList.remove("disable-scroll");
    }, 500); // Adjust the delay as needed
  }
}


// Add a keydown event listener to the document
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(); // Close the modal view when the ESC key is pressed
  }
});


// Store the initial URL hash
const initialHash = window.location.hash;

// Add a popstate event listener to the window
window.addEventListener("popstate", () => {
  const currentHash = window.location.hash;

  // Check if the hash has changed from the initial value
  if (currentHash !== initialHash) {
    closeModal(); // Close the modal view when the back button is pressed on mobile
  }
});









/*==================== GET YEAR AND CURRENT AGE ====================*/
//update copyright year automatically and age

//USAGE: <span current-year></span>
//USAGE: <span my-age></span>

// Function to update the year and age
function updateYearAndAge() {
  // Get all elements with the current-year and my-age attributes
  let yearElements = document.querySelectorAll("[current-year]");
  let ageElements = document.querySelectorAll("[my-age]");

  // Get the current date and time in Asia/Manila time zone
  let currentDate = new Date();
  let options = { year: 'numeric', timeZone: 'Asia/Manila' };
  let currentYear = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  // Calculate the age
  let birthdate = new Date("July 28, 2001");  // Set the birthdate to July 28, 2001
  let ageInMilliseconds = currentDate - birthdate;  // Calculate the difference between current date and birthdate in milliseconds
  let ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));  // Calculate the age in years, accounting for leap years

  // Iterate over each element and update the year
  yearElements.forEach((element) => {
    element.textContent = currentYear; // Replace content with current year
  });

  // Iterate over each element and update the age
  ageElements.forEach((element) => {
    element.textContent = ageInYears; // Replace content with the calculated age
  });
}

// Call the updateYearAndAge function initially
updateYearAndAge();

// Schedule the updateYearAndAge function to be called every minute
setInterval(updateYearAndAge, 60000); // 60000 milliseconds = 1 minute





const name1 = "Your shortcut to Generate Raw GitHub Links";
const name2 = "by emmanpbarrameda";
const name3 = "Freelancer";
const name4 = "Desktop Developer";

let i = 0;
let currentName = name1;

function typeEffect() {
  const homeWorkElement = document.getElementsByClassName("convert__subtitle")[0];

  if (i <= currentName.length) {
    const typedText = currentName.substring(0, i);
    homeWorkElement.innerHTML = typedText + "█";
    i++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(function () {
      i = 0;
      if (currentName === name1) {
        currentName = name2;
      } else if (currentName === name2) {
        currentName = name1;
      } else {
        currentName = name1;
      }
      homeWorkElement.innerHTML = "";
      typeEffect();
    }, 2000);
  }
}

function work() {
  setTimeout(typeEffect, 1000);
}

work();





/*======================= CONVERT TO RAW =======================*/

/*===== ENABLE/DISABLE A BUTTON, BASED ON INPUT FIELDS OR PASTE DATA =====*/

// Function to handle input event
function handleInputChange(event) {
  const convertInput = event.target;
  const convertBtn = convertInput.nextElementSibling;

  if (convertInput.value.trim() === '') {
    convertBtn.disabled = true; // Disable the button when the input field is empty
  } else {
    convertBtn.disabled = false; // Enable the button when the input field has content
  }
}

// Loop through each pair of input and button elements
for (let i = 0; i < convertInputs_ALL.length; i++) {
  const convertInput = convertInputs_ALL[i];
  const convertBtn = convertBtns_ALL[i];

  // Set the initial state of the button
  convertBtn.disabled = true;

  // Attach the 'input' event listener to each input element
  convertInput.addEventListener('input', handleInputChange);

  // Attach the 'paste' event listener to each input element
  convertInput.addEventListener('paste', handleInputChange);

  // Attach the 'click' event listener to each button element
  convertBtn.addEventListener('click', function () {
    console.log('You entered:', convertInput.value);
  });
}

//ORIG CODE STYLE:
//https://stackdiary.com/enable-disable-button-javascript/




/*===== CHECK IF THE "inputted__text" is empty, then clear the converted__text =====*/
inputtedText.addEventListener('keyup', function () {
  if (inputtedText.value.trim() === '') {
    convertedText.value = ''; // Clear the converted text if inputted text is empty
    document.querySelector('.convert__copy_btn').disabled = true;    // Disable the COPY BTN 
  }
});





/*=== PROCESS FOR CONVERTHING GITHUB LINK TO RAW LINK  ===*/
function convertToRawLink() {

  /*=== VARS ===*/
  var githubLink = document.getElementById("githubLink").value;

  /*=== CHECK IF INVALID LINK, BEFORE PROCESS  ===*/
  if (!isValidGithubLink(githubLink)) {
    showAlertToast('Error', 'Invalid Link', 'uil-times');
    inputtedText.focus(); // Focus on converted text
    convertedText.value = ''; // Clear the converted text
    document.querySelector('.convert__copy_btn').disabled = true;    // Disable the COPY BTN 
    return;
  }

  /*=== PROCESS OF CONVERTING LINK TO RAW LINK  ===*/
  var rawLink = githubLink.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
  document.getElementById("rawLink").value = rawLink;
  document.querySelector('.convert__copy_btn').disabled = false; // Enable the COPY BTN

  copyRawLink(); // AUTO COPY
}




/*=== CHECK IF LINK IS "GITHUB.COM"  ===*/
function isValidGithubLink(link) {
  var pattern = /^https?:\/\/github\.com/;
  return pattern.test(link);
}




/*=== PROCESS FOR COPYING RAW LINK  ===*/
function copyRawLink() {
  var rawLink = document.getElementById("rawLink");
  rawLink.select();
  rawLink.setSelectionRange(0, 99999);
  document.execCommand("copy");
  showAlertToast('Success', 'Copied to clipboard!', 'uil-check');
}




/*=== TRIGGER "ENTER" KEY EVENT  ===*/
const githubLinkInput = document.getElementById('githubLink');

// Add an event listener to the input field
githubLinkInput.addEventListener('keyup', function (event) {
  // Check if the "Enter" key was pressed (key code 13)
  if (event.keyCode === 13) {
    // Trigger the button click
    convertBtns.click();
  }
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);






/*==================== ANIMATION WHILE SCROLLING ON WHOLE SITE ====================*/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);





/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);



/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Add animation to scroll-up button
const scrollUpButton = document.getElementById("scroll-up");

scrollUpButton.addEventListener("click", () => {
  // Add animate__fadeInUp class
  scrollUpButton.classList.add("animate__animated", "animate__slideInUp");

  // Remove animate__fadeInUp class after the animation finishes
  setTimeout(() => {
    scrollUpButton.classList.remove("animate__animated", "animate__slideInUp");
  }, 1000); // Adjust the delay as needed
});


/*==================== SHOW SCROLL DOWN ====================*/
function scrollDown() {
  const scrollDown = document.getElementById("scroll-down");
  // When the scroll is higher than 560 viewport height, add the show-scrolldown class to the a tag with the scroll-top class
  if (this.scrollY < 500) scrollDown.classList.add("show-scrolldown");
  else scrollDown.classList.remove("show-scrolldown");
}
window.addEventListener("scroll", scrollDown);

// Add animation to scroll-down button
const scrollDownButton = document.getElementById("scroll-down");

scrollDownButton.addEventListener("click", () => {
  // Add animate__fadeInUp class
  scrollDownButton.classList.add("animate__animated", "animate__slideInDown");

  // Remove animate__fadeInUp class after the animation finishes
  setTimeout(() => {
    scrollDownButton.classList.remove("animate__animated", "animate__slideInDown");
  }, 1000); // Adjust the delay as needed
});





/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Validate if user previously chose a theme
if (selectedTheme) {
  // If theme selected by user previously then we add/remove classes again based on localStorage
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
// If initially there is no local storage, i.e., user has not made a choice and this is the first time loading
// Then we check if browser/OS is in dark mode and then add dark theme if required by default
else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  console.log("found dark mode for browser/OS");
  // Add dark theme by setting dark theme flags in localStorage
  localStorage.setItem("selected-theme", "dark");
  localStorage.setItem("selected-icon", "uil-moon");
  // Add classes for dark theme in DOM
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Add animation classes using Animate.css
  document.body.classList.add("animate__animated", "animate__fadeIn", "animate__fast");
  themeButton.classList.add("animate__animated", "animate__fadeIn", "animate__fast");

  // Remove animation classes after the animation finishes
  setTimeout(() => {
    document.body.classList.remove("animate__animated", "animate__fadeIn", "animate__fast");
    themeButton.classList.remove("animate__animated", "animate__fadeIn", "animate__fast");
  }, 500);

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});




/*==================== SHOW TOAST ALERT ====================*/
/*CSS:   .toast {   */

function showAlertToast(text1, text2, iconClass) {
  // Create toast element
  const toast = document.createElement('div');
  toast.classList.add('toast');

  // Create toast content
  const toastContent = document.createElement('div');
  toastContent.classList.add('toast-content');

  // Create check icon
  const checkIcon = document.createElement('i');
  checkIcon.classList.add('uil', iconClass, 'check');

  // Create message container
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message');

  // Create text elements
  const textElement1 = document.createElement('span');
  textElement1.classList.add('text', 'text-1');
  textElement1.textContent = text1;

  const textElement2 = document.createElement('span');
  textElement2.classList.add('text', 'text-2');
  textElement2.textContent = text2;

  // Append elements to the toast
  messageContainer.appendChild(textElement1);
  messageContainer.appendChild(textElement2);
  toastContent.appendChild(checkIcon);
  toastContent.appendChild(messageContainer);
  toast.appendChild(toastContent);

  // Create close icon
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('uil', 'uil-times', 'close');
  closeIcon.addEventListener('click', () => {
    toast.classList.remove('active');
    setTimeout(() => {
      toast.remove();
    }, 300); //close animation
    clearTimeout(timer1);
    clearTimeout(timer2);
  });
  toast.appendChild(closeIcon);

  // Create progress element
  const progress = document.createElement('div');
  progress.classList.add('progress');

  // Append progress to the toast
  toast.appendChild(progress);

  // Add toast to the document
  document.body.appendChild(toast);

  // Play sound
  const audio = new Audio('assets/mp3/notification-sound-7062.mp3');
  audio.play();

  // Show and remove toast after a delay
  setTimeout(() => {
    toast.classList.add('active');
    progress.classList.add('active');
  }, 100);

  const timer1 = setTimeout(() => {
    toast.classList.remove('active');
  }, 3000); //1s = 1000 milliseconds

  const timer2 = setTimeout(() => {
    progress.classList.remove('active');
  }, 3300); //1s = 1000 milliseconds
}



/*==================== Function for reCAPTCHA v3 ====================*/
//https://dirask.com/posts/reCAPTCHA-v3-simple-example-how-to-use-in-JavaScript-and-Spring-Framework-prw0zj

var ReCAPTCHAv3Utils = (function () {
  // reCaptcha v3 key to get on https://www.google.com/recaptcha/admin#list
  var PUBLIC_KEY = '6LdUccImAAAAALa1N3ue9L4t8SVRdA3adp2aziIF';

  // Requests Google reCAPTCHAv3 API to get token.
  // Arguments:
  //   action - we can use our own label that describes our action
  //   Look at "Use case" on https://developers.google.com/recaptcha/docs/v3
  //   e.g. homepage, login, social, e-commerce
  //   onSuccess and onError - callback functions
  var request = function (action, onSuccess, onError) {

    // Display toast message here
    showAlertToast('Verifying reCAPTCHA', 'reCAPTCHA verification in progress...', 'uil-spinner');

    if (window.grecaptcha) {
      window.grecaptcha.ready(function () {
        var config = {
          action: action
        };
        try {
          var query = window.grecaptcha.execute(PUBLIC_KEY, config);
          if (onSuccess) {
            console.log("reCAPTCHA verification successful");
            query.then(onSuccess);
          }
        } catch (e) {
          var message = e && e.message || 'Captcha request error.';
          if (onError) {
            onError(message);
          }
        }
      });
    } else {
      if (onError) {
        onError('reCAPTCHA v3 is not loaded correctly.');
      }
    }
  };

  return {
    request: request
  };
})();



/*==================== DISABLE RIGHT CLICK EVENTS ON WEBSITE ====================*/

// Capture the right-click event on the whole page
document.addEventListener('contextmenu', function (event) {
  // Check if the right mouse button was clicked
  if (event.button === 2) {
    // Check if the right-click occurred outside of an <a> tag and not on an <input> element
    const isLinkClicked = event.target.tagName.toLowerCase() === 'a';
    const isInputClicked = event.target.tagName.toLowerCase() === 'input';
    if (!isLinkClicked && !isInputClicked) {
      // Prevent the default behavior for right-click
      event.preventDefault();
    }
  }
});

// Add hover event listeners to all 'a' tags
const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener('contextmenu', function (event) {
    // Allow right-clicking on the hovered <a> tag
    event.stopPropagation();
  });
  link.addEventListener('mouseenter', function () {
    // Add a CSS class to the hovered link for styling
    this.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', function () {
    // Remove the CSS class from the link when no longer hovered
    this.classList.remove('hovered-link');
  });
}
