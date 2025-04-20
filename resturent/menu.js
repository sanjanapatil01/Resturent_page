const availableDishes = [
   "dosa", "chicken biryani", "cheese balls", "badam milk"
];


function opendish() {
   const searchBar = document.getElementById('input_bar');
   const searchValue = searchBar.value.toLowerCase().trim();
   
   if (searchValue === "") {
       alert("Please enter a dish name to search");
       return;
   }
   
   function toggleMode()
   {
     var ele=document.body;
    ele.classList.toggle('dark-mode');
   }
   const foundDish = availableDishes.find(dish => dish.includes(searchValue));
   if (foundDish) {
       alert("Yes, " + foundDish + " is available in our menu!");
       
     
       let sectionToOpen;
       
       if (foundDish === "dosa") {
           openVeg();
           sectionToOpen = document.querySelector('.veg_item');
       } else if (foundDish === "chicken biryani") {
           openNonveg();
           sectionToOpen = document.querySelector('.nveg_items');
       } else if (foundDish === "cheese balls") {
           openSnack();
           sectionToOpen = document.querySelector('.snak_items');
       } else if (foundDish === "badam milk") {
           openDrink();
           sectionToOpen = document.querySelector('.drink_item');
       }
       
       if (sectionToOpen) {
           sectionToOpen.scrollIntoView({ behavior: 'smooth' });
       }
   } else {
       alert("Sorry, we couldn't find " + searchValue + " in our menu");
   }
}

// Star Rating System
document.addEventListener('DOMContentLoaded', function() {
   // Initialize star ratings
   const allStars = document.querySelectorAll('.fa-star');
   
   allStars.forEach(star => {
       star.addEventListener('click', function() {
           const starContainer = this.closest('.star-btn');
           const stars = starContainer.querySelectorAll('.fa-star');
           const selectedIndex = parseInt(this.getAttribute('data-index'));
           
           stars.forEach((s, index) => {
               if (index <= selectedIndex) {
                   s.classList.add('active');
               } else {
                   s.classList.remove('active');
               }
           });
       });
       
       // Hover effect
       star.addEventListener('mouseover', function() {
           const starContainer = this.closest('.star-btn');
           const stars = starContainer.querySelectorAll('.fa-star');
           const hoverIndex = parseInt(this.getAttribute('data-index'));
           
           stars.forEach((s, index) => {
               if (index <= hoverIndex) {
                   s.style.color = '#ffc107';
               }
           });
       });
       
       star.addEventListener('mouseout', function() {
           const starContainer = this.closest('.star-btn');
           const stars = starContainer.querySelectorAll('.fa-star');
           
           stars.forEach((s) => {
               if (!s.classList.contains('active')) {
                   s.style.color = '#ddd';
               }
           });
       });
   });
});

// Quantity controls
function incrementQuantity(btn) {
   const quantityElement = btn.parentElement.querySelector('.quantity');
   let quantity = parseInt(quantityElement.textContent);
   quantity++;
   quantityElement.textContent = quantity;
}

function decrementQuantity(btn) {
   const quantityElement = btn.parentElement.querySelector('.quantity');
   let quantity = parseInt(quantityElement.textContent);
   if (quantity > 1) {
       quantity--;
       quantityElement.textContent = quantity;
   }
}

// Profile dropdown toggle
function toggleProfile() {
   const dropdown = document.getElementById('profileDropdown');
   dropdown.classList.toggle('show');
   
   // Close dropdown when clicking outside
   if (dropdown.classList.contains('show')) {
       document.addEventListener('click', closeProfileDropdown);
   } else {
       document.removeEventListener('click', closeProfileDropdown);
   }
}

function closeProfileDropdown(event) {
   const dropdown = document.getElementById('profileDropdown');
   const profileBtn = document.querySelector('.profile-btn');
   
   // If clicking outside the dropdown and not on the profile button
   if (!dropdown.contains(event.target) && !profileBtn.contains(event.target)) {
       dropdown.classList.remove('show');
       document.removeEventListener('click', closeProfileDropdown);
   }
}

// Toggle section visibility
function openVeg() {
   document.querySelector('.veg_item').style.display = 'block';
}

function offVeg() {
   document.querySelector('.veg_item').style.display = 'none';
}

function openNonveg() {
   document.querySelector('.nveg_items').style.display = 'block';
}

function offNonveg() {
   document.querySelector('.nveg_items').style.display = 'none';
}

function openSnack() {
   document.querySelector('.snak_items').style.display = 'block';
}

function offSnack() {
   document.querySelector('.snak_items').style.display = 'none';
}

function openDrink() {
   document.querySelector('.drink_item').style.display = 'block';
}

function offDrink() {
   document.querySelector('.drink_item').style.display = 'none';
}

// Mobile menu toggle
function toggleMenu() {
   const menu = document.querySelector('.menu');
   menu.classList.toggle('active');
}