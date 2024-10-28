let container=document.getElementById("container")

let image = document.createElement("img")
let title=document.createElement("p")
let price=document.createElement("span")
let button=document.createElement("button")


image.setAttribute("src","https://i.pinimg.com/736x/48/ef/5e/48ef5e641deadffae9e55d88e4296cdd.jpg");
image.style.borderRadius="20px"
image.style.width="300px"
image.style.height="300px"

title.textContent="Deputy CM"
title.style.fontSize="30px"


price.textContent="$15000"

button.textContent="Buy Now"
button.style.padding="10px"
button.style.margin="10px"
button.style.backgroundColor="green"



container.style.display="inline-block"
container.style.border="2px solid black"
container.style.borderRadius="15px"
container.style.textAlign="center"
container.style.padding="50px"
container.style.background="linear-gradient(lightgreen,lightyellow)"

container.append(image,title,price,button)

