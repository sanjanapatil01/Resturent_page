const availableDishes = [
   "dosa", "chicken biryani", "cheese balls", "badam milk"
];
// Define pagination indexes for each section
let currentIndexVeg = 0;
let currentIndexNonVeg = 0;
let currentIndexSnacks = 0;
let currentIndexDrinks = 0;

const itemsPerPage = 3;

// Query selectors for different sections
const vegItems = document.querySelectorAll('.veg .cards');
const nonVegItems = document.querySelectorAll('.n_veg .cards');
const snackItems = document.querySelectorAll('.sanck .cards'); // Ensure correct class name
const drinkItems = document.querySelectorAll('.drinks .cards');

console.log("Total veg cards found:", vegItems.length);
console.log("Total non-veg cards found:", nonVegItems.length);
console.log("Total snack items found:", snackItems.length);
console.log("Total drink items found:", drinkItems.length);

// Update visibility function for Veg
function updateVisibleVegItems() {
    vegItems.forEach((item, index) => {
        item.style.display = (index >= currentIndexVeg && index < currentIndexVeg + itemsPerPage) ? 'block' : 'none';
    });
}

// Update visibility function for Non-Veg
function updateVisibleNonVegItems() {
    nonVegItems.forEach((item, index) => {
        item.style.display = (index >= currentIndexNonVeg && index < currentIndexNonVeg + itemsPerPage) ? 'block' : 'none';
    });
}

// Update visibility function for Snacks
function updateVisibleSnackItems() {
    snackItems.forEach((item, index) => {
        item.style.display = (index >= currentIndexSnacks && index < currentIndexSnacks + itemsPerPage) ? 'block' : 'none';
    });
}

// Update visibility function for Drinks
function updateVisibleDrinkItems() {
    drinkItems.forEach((item, index) => {
        item.style.display = (index >= currentIndexDrinks && index < currentIndexDrinks + itemsPerPage) ? 'block' : 'none';
    });
}

// Pagination functions for Veg
function nextVegPage() {
    currentIndexVeg = (currentIndexVeg + itemsPerPage < vegItems.length) ? currentIndexVeg + itemsPerPage : 0;
    updateVisibleVegItems();
}

function prevVegPage() {
    currentIndexVeg = (currentIndexVeg - itemsPerPage >= 0) ? currentIndexVeg - itemsPerPage : 0;
    updateVisibleVegItems();
}

// Pagination functions for Non-Veg
function nextNonVegPage() {
    currentIndexNonVeg = (currentIndexNonVeg + itemsPerPage < nonVegItems.length) ? currentIndexNonVeg + itemsPerPage : 0;
    updateVisibleNonVegItems();
}

function prevNonVegPage() {
    currentIndexNonVeg = (currentIndexNonVeg - itemsPerPage >= 0) ? currentIndexNonVeg - itemsPerPage : 0;
    updateVisibleNonVegItems();
}

// Pagination functions for Snacks
function nextSnackPage() {
    currentIndexSnacks = (currentIndexSnacks + itemsPerPage < snackItems.length) ? currentIndexSnacks + itemsPerPage : 0;
    updateVisibleSnackItems();
}

function prevSnackPage() {
    currentIndexSnacks = (currentIndexSnacks - itemsPerPage >= 0) ? currentIndexSnacks - itemsPerPage : 0;
    updateVisibleSnackItems();
}

// Pagination functions for Drinks
function nextDrinkPage() {
    currentIndexDrinks = (currentIndexDrinks + itemsPerPage < drinkItems.length) ? currentIndexDrinks + itemsPerPage : 0;
    updateVisibleDrinkItems();
}

function prevDrinkPage() {
    currentIndexDrinks = (currentIndexDrinks - itemsPerPage >= 0) ? currentIndexDrinks - itemsPerPage : 0;
    updateVisibleDrinkItems();
}

// Initialize visibility on page load
document.addEventListener("DOMContentLoaded", () => {
    updateVisibleVegItems();
    updateVisibleNonVegItems();
    updateVisibleSnackItems();
    updateVisibleDrinkItems();
});

// Event listeners for Veg
document.getElementById("nextVeg").addEventListener("click", nextVegPage);
document.getElementById("prevVeg").addEventListener("click", prevVegPage);

// Event listeners for Non-Veg
document.getElementById("nextNonveg").addEventListener("click", nextNonVegPage);
document.getElementById("prevNonveg").addEventListener("click", prevNonVegPage);

// Event listeners for Snacks
document.getElementById("nextSnacks").addEventListener("click", nextSnackPage);
document.getElementById("prevSnacks").addEventListener("click", prevSnackPage);

// Event listeners for Drinks
document.getElementById("nextDrinks").addEventListener("click", nextDrinkPage);
document.getElementById("prevDrinks").addEventListener("click", prevDrinkPage);


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


document.addEventListener("DOMContentLoaded", function() {
    fetch('/accoounts/display/')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("profile-content").innerHTML = "<p>No profile data found.</p>";
            } else {
                document.getElementById("profile-content").innerHTML = `
                    <h2>Welcome, ${data.first_name} ${data.last_name}</h2>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <div class="profile-image">
                        <img src="${data.profile_pic}" alt="Profile Picture">
                    </div>
                `;
            }
        });
});


