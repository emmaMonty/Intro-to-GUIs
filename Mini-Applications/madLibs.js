//getting all inputs from html
const noun = document.getElementById("in1");
const verb1 = document.getElementById("in2");
const verb2 = document.getElementById("in3");
const adj = document.getElementById("in4");
const object = document.getElementById("in5");
const button = document.getElementById("generate");
const message = document.getElementById("message");
let filled = 0;

button.addEventListener("click",(e) =>{
    //checks for all the inputs
    if(noun.value.length !== 0){filled++;}
    else{
        message.innerHTML="It needs a noun!";
        return;
    }

    if(verb1.value.length !== 0){filled++;}
    else{   
        message.innerHTML="It needs a verb!";
        return;
    }

    if(verb2.value.length !== 0){filled++;}
    else{
        message.innerHTML="It needs a verb!";
        return;
    }

    if(adj.value.length !== 0){filled++;}
    else{
        message.innerHTML="It needs an adjective!";
        return;
    }

    if(object.value.length !== 0){filled++;}
    else{
        message.innerHTML="It needs an adjective!";
        return;
    }
    //calls generateStory if every input is full.
    if(filled === 5){
        generateStory();
    }
    filled = 0;
});
//the story
const generateStory = () =>{
    message.innerHTML = `Once upon a time a prince ${noun.value}, 
    happen upon a great adventure. It caused him to  ${verb1.value} 
    and  ${verb2.value} in many different places. Once while he was 
    ${verb1.value}ing, he found the ${adj.value} troll. He had fought and defeated 
    the ${adj.value} troll. He finally won using the great ${object.value}. 
    After defeating the troll, he started on the next adventure. `;
};

