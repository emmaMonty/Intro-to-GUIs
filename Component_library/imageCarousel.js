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