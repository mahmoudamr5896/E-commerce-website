// You can reuse some of your existing JavaScript code for this page
// Add code for opening and closing the Contact Us dialog and Confirmation Message

const contactBtn = document.querySelector('.contact-btn');
const contactDialog = document.getElementById('contact-dialog');
const closeBtn = document.querySelector('.close-btn');
const confirmationMessage = document.getElementById('confirmation-message');
const closeBtnMessage = document.querySelector('.close-btn-message');
const returnBtn = document.querySelector('.return-btn');

contactBtn.addEventListener('click', () => {
  contactDialog.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  contactDialog.style.display = 'none';
});

closeBtnMessage.addEventListener('click', () => {
  confirmationMessage.style.display = 'none';
});

returnBtn.addEventListener('click', () => {
  confirmationMessage.style.display = 'none';
});

const submitForm = () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const contactNumberInput = document.getElementById('contact-number');
  const inquiryInput = document.getElementById('inquiry');

  if (!nameInput.value || !emailInput.value || !contactNumberInput.value || !inquiryInput.value) {
    alert('Please fill in all fields.');
  } else {
    // Assuming the form is submitted successfully, show confirmation message
    confirmationMessage.style.display = 'block';
    contactDialog.style.display = 'none';

    // Clear form fields
    nameInput.value = '';
    emailInput.value = '';
    contactNumberInput.value = '';
    inquiryInput.value = '';
  }
};

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission
  submitForm();
});
