// // Navbar
document.getElementById("navbar-menu-button").addEventListener("click", () => {
    console.log("The navbar button was clicked");
});
// // Navbar code section
document.getElementById("navbar-html").innerText = `
<nav>
  <div class="title">
    <span class="material-icons">menu</span>
    Application Name
  </div>
  <div class="links">
    <a>Home</a>
    <a>Dashboard</a>
    <a>Profile</a>
  </div>
</nav>
`;

document.getElementById("navbar-css").innerText = `
.navbar{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background-color: grey;
    color: aqua;
    justify-content: space-between;
    z-index: 999;
}
`;

document.getElementById("navbar-js").innerText = `
document.getElementById("navbar-menu-button").addEventListener("click", () => {
    console.log("The navbar button was clicked");
});
`;

// // Navbar Drawer
document.getElementById("navbardrawer-menu-button").addEventListener("click", () => {
    document.getElementById("NavbarDrawer").classList.toggle("open");
});
// // Navbar Drawer code section
document.getElementById("navbarDrawer-html").innerText = `
<nav class ="navbar">
    <section class = "navbar-title">
        <button class ="navbar-menu-button" id="navbar-menu-button">
            <span class ="material-icons">menu</span>
        </button>
    </section>
</nav>
<nav class="NavbarDrawer" id ="NavbarDrawer">
    <a>Home</a>
    <a>Dashboard</a>
    <a>Profile</a>
    <a>Settings</a>
</nav>
`;

document.getElementById("navbarDrawer-css").innerText = `
.NavbarDrawer{
    position: absolute;
    box-sizing: border-box;
    top: 58px;
    left: -300px;
    width: 300px;
    bottom: 0px;
    background-color: var(--secondary-color);
    color: var(--color-on-secondary);
    transition: all .3s ease;
    display:flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
}

.NavbarDrawer.open{
    left: 0px;
}
`;

document.getElementById("navbarDrawer-js").innerText = `
document.getElementById("navbar-menu-button").addEventListener("click", () => {
    document.getElementById("NavbarDrawer").classList.toggle("open");
});
`;

// // BUTTON's code section
document.getElementById("button-html").innerText = `
<!-- Standard -->
<button class="button">Save</button>

<!-- ICONS -->
<button class="button"><span class="material-icons">save</span>Save</button>

<!-- Floating -->
<button class="floating-action-button">
    <span class="material-icons">add</span>
</button>
`;

document.getElementById("button-css").innerText = `
.button{
    background-color: var(--primary-color);
    color: var(--color-on-primary);
    padding: 8px 32px;
    text-transform: uppercase;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 24px;
    transition: all .3s ease;
}

button:hover{
    background-color: var(--light-background);
}
.floating-action-button{
    width: 64px;
    height: 64px;
    background-color: var(--primary-color);
    color: var(--color-on-primary);
    border-radius: 64px;
    border: none;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, .24), 0px 1px 2px rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: all .3s ease;
}
.floating-action-button:hover{
    background-color: var(--light-background);
}
`;
// // Image carousel
function setupIntervalAnimation(slider){
    if(slider.children.length === 1){
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    }
    else if(slider.children.length === 2){
        const secondChild = slider.lastElementChild.cloneNode(true);
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(secondChild);
    }
    else if(slider.children.length === 3){
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    } 
    setInterval(() => {
        slider.animate([{
            transform: `translateX(-500px)`
        }],{
           duration: 500,
           easing: "ease", 
        }).onfinish = () =>{
            const firstChild = slider.firstElementChild;
            firstChild.remove();
            slider.appendChild(firstChild.cloneNode(true));
        }
    }, 3000);
}

const carouselSlider = document.getElementById("image-slider");

setupIntervalAnimation(carouselSlider);
// // image carousel code section
document.getElementById("imageCarousel-html").innerText = `
<div class="carousel">
    <div class="image-slider" id="image-slider">
        <img src="Wires.webp" alt="a cool image" width="400px" >
        <img src="math.webp" alt="a cool image" width="400px" >
        <img src="circuit.png" alt="a cool image" width="400px">
        <img src="micro.jpg" alt="a cool image" width="400px">
    </div>
</div>
`;

document.getElementById("imageCarousel-css").innerText = `
.carousel{
    overflow: hidden;
    width: 100%;
}
 .carousel .image-slider{
    display: flex;
    transform: translateX(-200px);
 }
`;

document.getElementById("imageCarousel-js").innerText = `
function setupIntervalAnimation(slider){
    if(slider.children.length === 1){
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    }
    else if(slider.children.length === 2){
        const secondChild = slider.lastElementChild.cloneNode(true);
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(secondChild);
    }
    else if(slider.children.length === 3){
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    } 
    setInterval(() => {
        slider.animate([{
            transform: 'translateX(-500px)'
        }],{
           duration: 500,
           easing: "ease", 
        }).onfinish = () =>{
            const firstChild = slider.firstElementChild;
            firstChild.remove();
            slider.appendChild(firstChild.cloneNode(true));
        }
    }, 3000);
}

const carouselSlider = document.getElementById("image-slider");

setupIntervalAnimation(carouselSlider);
`;

// // Loading Spinner
const dot = document.getElementById('dot');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
dot.addEventListener('click', () =>{
    dot.classList.add('active');
    dot1.classList.add('active');
    dot2.classList.add('active');
});

// // loading spinner 1 code section
document.getElementById("loadingSpinner1-html").innerText = `
<link rel="stylesheet" href="loadingSpinner1.css">
<script src ="loadingSpinner1.js" defer></script>
<div class ="dots-loader">
    <div class="dot" id ="dot" ></div>
    <div class="dot1" id ="dot"></div>
    <div class="dot2" id ="dot"></div>
</div>
`;

document.getElementById("loadingSpinner1-css").innerText = `
.dots-loader{
    display: flex;
    gap: 16px;
}

@keyframes dots {
    50%{
        transform: translateY(-16px);
    }
    100%{
        transform: translateY(0px);
    }
}
.dot,.dot1,.dot2{
    /* background-color: var(--secondary-color); */
    background-color: aqua;
    width: 64px;
    height: 64px;
    border-radius: 32px;
   
}
.dot.active{
    animation: dots;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}
.dot1.active{
    animation: dots;
    animation-duration: 1.33s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}
.dot2.active{
    animation: dots;
    animation-duration: 1.66s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}
`;

document.getElementById("loadingSpinner1-js").innerText = `
const dot = document.getElementById('dot');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
dot.addEventListener('click', () =>{
    dot.classList.add('active');
    dot1.classList.add('active');
    dot2.classList.add('active');
});
`;

// // loading spinner code section
document.getElementById("loadingSpinner2-html").innerText = `
<div class ="spinny-loader" id="spinny-loader">
    <div class="spinny"></div>
</div>
`;

document.getElementById("loadingSpinner2-css").innerText = `
.spinny-loader{
    position: relative;
 }
 
 .spinny{
     position: absolute;
     border: 8px solid rgba(0,0,0,.1);
     border-left-color: #555;
     border-radius: 50%;
     width: 50px;
     height: 50px;
     animation: spin 1s ease-in-out infinite;
 }
 @keyframes spin {
     to{
         transform: rotate(360deg);
     }
 }
 .spinny-loader.active{
     opacity: 1;
     visibility: visible;
 }
 .spinny-loader{
     opacity: 1;
     visibility: visible;
 }
`;

// // loading spinner 3 code section 
document.getElementById("loadingSpinner3-html").innerText = `
<div class ="wordy-loader" id="wordy-loader"> Waiting Waiting</div>
`;

document.getElementById("loadingSpinner3-css").innerText = `
.wordy-loader{
    animation-name: animate-word;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    text-transform: uppercase;
}
@keyframes animate-word{
    0%{ color: rgba(0, 38, 58, 255);}
    25%{ color: rgba(0, 38, 58, 191);}
    50%{ color: rgba(0, 38, 58, 128);}
    75%{ color: rgba(0, 38, 58, 64);}
    100%{ color: rgba(0, 38, 58, 0);}
}
`;