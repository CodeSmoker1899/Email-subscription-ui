const face_front = document.querySelector(".face.front");
const face_back = document.querySelector(".face.back");
const input_email = document.querySelector('input[type="email"]');
const icon = document.querySelector(".face.back i");
const h2 = document.querySelector(".face.back h2");
const p = document.querySelector(".face.back p");

var valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var isMatch = true;

function submitEmail(){
    if(input_email.value.match(valid_email)){
        isMatch=true;
        icon.classList.add("fa-check");
        h2.innerHTML = "Thank you for Subscribing our Blog!";
        p.innerHTML = "We'll let you know about our new video's!";
    }
    else{
        isMatch=false;
        icon.classList.add("fa-times");
        h2.innerHTML = "You have entered Email is incorrect!";
        p.innerHTML = "Please check the Email once again!";
    }

    face_front.style.transform = "rotateY(180deg)";
    face_back.style.transform = "rotateY(360deg)";
    timeout();
}

function timeout(){
    setTimeout(() => {
        face_front.style.transform = "rotateY(0)";
        face_back.style.transform = "rotateY(180deg)";
        if(isMatch){
            icon.classList.remove("fa-check");
        }else{
            icon.classList.remove("fa-times");
        }
    }, 3000);
}