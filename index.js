const form = document.getElementById('orderForm');
const nameInput = document.getElementById('name');
const addressInput = document.getElementById('address');
const telephoneInput = document.getElementById('telephone');
const toppingInputs = document.getElementsByName('topping');
const sizeInputs = document.getElementsByName('size');
const smallElements = document.querySelectorAll('.form-control small');
const dateSection = document.querySelector('.form-container');
const labels = document.querySelectorAll('.container-form label');
const button = document.getElementById('submit');

//Create elements
const newHeading = document.createElement('h4');
newHeading.textContent = 'Delivery Time';
dateSection.appendChild(newHeading);
const timeInput = document.createElement('input');
timeInput.type = 'time';
dateSection.appendChild(timeInput);

//Iterate over a collection of elements
for (let i = 0; i < labels.length; i++) {
  labels[i].style.color = "green";
}
//BOM
window.alert("Welcome to the order page!")

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Validate Name
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
  } else {
    showSuccess(nameInput);
  }

  // Validate Address
  if (addressInput.value.trim() === '') {
    showError(addressInput, 'Address is required');
  } else {
    showSuccess(addressInput);
  }

  // Validate Telephone
  if (telephoneInput.value.trim() === '') {
    showError(telephoneInput, 'Telephone is required');
  } else {
    showSuccess(telephoneInput);
  }

  // Validate Topping
  if (!Array.from(toppingInputs).some(input => input.checked)) {
    alert('Please select at least one topping');
  }

  // Validate Size
  if (!Array.from(sizeInputs).some(input => input.checked)) {
    alert('Please select a size');
  }
  button.addEventListener('click', function (e) {
    e.preventDefault();
    button.value = "Order Placed!"
  });

  document.getElementById("orderForm").reset();
});
newHeading.addEventListener('mouseover', function () {
  newHeading.innerHTML = '<strong>Central time</strong>'
});

// Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  small.style.visibility = 'visible';
}

// Show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.style.visibility = 'hidden';
}
