setTimeout(( () => document.getElementById("logo").classList.add("move") ), 5000);

document.getElementById("welcome").addEventListener("click", ()=>{
    document.getElementById("welcome").textContent = "Have a Good Time!"
});


let btm = document.querySelector("button.call-to-action");

btm.addEventListener("click", ()=>{
    document.querySelector("div#ct2").style.display = "block"
});