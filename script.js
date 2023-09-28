const input = document.getElementById("input")
const btn = document.querySelector("button")
const err = document.querySelector(".error")
const success = document.querySelector(".success_con")
const container = document.querySelector(".container")
const dismiss = document.querySelector(".success_btn")

function click(e){
    e.preventDefault()
    
    let spanEmail = document.getElementById('span-email-placeholder');

    if (!validate(input.value)){
        input.style = "background-color: hsl(5, 77%, 83%); border:1px solid hsl(4, 100%, 67%); color: hsl(4, 100%, 67%)"
        err.style = "display: block;"
    } else {
        err.style = "display: none;"
        success.style = "display: block"
        container.style= " display: none"
    }

    spanEmail.innerHTML = input.value
}

function validate(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}


btn.addEventListener("click", click)


dismiss.addEventListener("click", function(){
    window.location.reload()
})