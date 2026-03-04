// Hambhurger Menu Click
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('nav-links')

if(bar){
    bar.addEventListener('click',()=>{

        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{

        nav.classList.remove('active');
    })
}

/* Women typing + erasing */
const word = "Women...";
let i = 0;
let deleting = false;
const speed = 150;
const textEl = document.getElementById("womenText");

function typeLoop() {
  if (!deleting && i <= word.length) {
    textEl.textContent = word.substring(0, i++);
  } else if (deleting && i >= 0) {
    textEl.textContent = word.substring(0, i--);
  }

  if (i === word.length) {
    setTimeout(() => deleting = true, 700);
  }

  if (i === 0) {
    deleting = false;
  }

  setTimeout(typeLoop, speed);
}

typeLoop();

  