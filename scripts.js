const selectors = {
   emailInputElement: document.querySelector('.newsletter__form-email-input'),
   emailDisplayElement: document.querySelector('.newsletter-success__email'),
   emailInvalidTextElement: document.querySelector('.newsletter__email-invalid-text'),
   newsletterSubmitBtn: document.querySelector('.newsletter__form-submit-btn'),
   newsletterSuccessBtn: document.querySelector('.newsletter-success__btn')
};

function isValidEmail(email) {
   const emailRegex = /^[a-zA-Z_][a-zA-Z_*\d*]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/;
   return emailRegex.test(email);
}

//newsletter submit button functionality
if (selectors.newsletterSubmitBtn !== null) {
   selectors.newsletterSubmitBtn.addEventListener('click', function() {
      if (isValidEmail(selectors.emailInputElement.value)) {
         sessionStorage.setItem('newsletter-email', selectors.emailInputElement.value);
         selectors.emailInputElement.value = '';//remove user email input
         window.open('./newsletter-success.html', '_self');
      }
      else {
         //add invalid styles for newletter email
         selectors.emailInvalidTextElement.classList.add('active');
         selectors.emailInputElement.classList.add('invalid');
      }
   });

   /**
    * This event listener will remove the invalid styles from the newsletter
    * email if the user clears the email input or when the user
    * corrects the input
    */
   selectors.emailInputElement.addEventListener('input', function() {
      if (selectors.emailInputElement.value === ''
         || isValidEmail(selectors.emailInputElement.value)) {
         selectors.emailInvalidTextElement.classList.remove('active');
         selectors.emailInputElement.classList.remove('invalid');
      }
   });
}

/**
 * This will display the user email when
 * the newsletter success page is loaded
 */
if (selectors.emailDisplayElement !== null) {
   const userEmail = sessionStorage.getItem('newsletter-email');
   selectors.emailDisplayElement.innerText = userEmail;
}

//newsletter success button functionality
if (selectors.newsletterSuccessBtn !== null) {
   selectors.newsletterSuccessBtn.addEventListener('click', function() {
      //go back to newletter page
      window.open('./index.html', '_self');
   });
}