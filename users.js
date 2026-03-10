let users = JSON.parse(localStorage.getItem("users")) || []

function register(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value

users.push({username,password})

localStorage.setItem("users",JSON.stringify(users))

location.href="index.html"

}

if(document.getElementById("users")){

let container = document.getElementById("users")

users.forEach(u=>{

let div=document.createElement("div")

div.className="story"

div.innerHTML="<h3>"+u.username+"</h3>"

container.appendChild(div)

})

}
