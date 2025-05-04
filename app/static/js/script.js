const screenWidth = window.innerWidth;
function toggleMenu() { 
  const menu = document.querySelector('.menu'); 
  menu.classList.toggle('active'); 
}
function toggleMode()
{
  var ele=document.body;
 ele.classList.toggle('dark-mode');
}
function openLogin()
{
    var login = document.querySelector('.login-now');
    login.classList.toggle('display')
    var reg = document.querySelector('.register-now');
    reg.classList.remove('displayy')
}
function openRegister()
{  
     window.location.href='registration'
    var reg = document.querySelector('.register-now');
    reg.classList.toggle('displayy')
    var login = document.querySelector('.login-now');
    login.classList.remove('display')
}
function openVeg() {
  const items = document.getElementsByClassName('veg_item');
  updateDisplayStyle()
function updateDisplayStyle() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 720) { 
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'inline-block';
        }
    } else {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'grid'; 
        }
    }
}

window.addEventListener('resize', updateDisplayStyle);
window.addEventListener('orientationchange', updateDisplayStyle);
}

function openNonveg(){
  const items = document.getElementsByClassName('nveg_items');
  updateDisplayStyle()
function updateDisplayStyle() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 720) { 
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'inline-block';
        }
    } else {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'grid'; 
        }
    }
}

window.addEventListener('resize', updateDisplayStyle);
window.addEventListener('orientationchange', updateDisplayStyle);
}


const items1 = document.getElementsByClassName('snak_items');
function openSnack(){
  updateDisplayStyle()
  function updateDisplayStyle() {
      const screenWidth = window.innerWidth;
  
      if (screenWidth <= 720) { 
          for (let i = 0; i < items.length; i++) {
              items1[i].style.display = 'inline-block';
          }
      } else {
          for (let i = 0; i < items.length; i++) {
              items1[i].style.display = 'grid'; 
          }
      }
  }
  
  window.addEventListener('resize', updateDisplayStyle);
  window.addEventListener('orientationchange', updateDisplayStyle);
}



const items = document.getElementsByClassName('drink_item');

function openDrink(){
updateDisplayStyle()
function updateDisplayStyle() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 720) { 
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'inline-block';
        }
    } else {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'grid'; 
        }
    }
}

window.addEventListener('resize', updateDisplayStyle);
window.addEventListener('orientationchange', updateDisplayStyle);
}
function offVeg() {
  const items = document.getElementsByClassName('veg_item');
  for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
  }
}
function offNonveg(){
  const items = document.getElementsByClassName('nveg_items');
  for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
  }
}
function offSnack(){
  const items = document.getElementsByClassName('snak_items');
  for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
  }
}
function offDrink(){
  const items = document.getElementsByClassName('drink_item');
  for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
  }
}