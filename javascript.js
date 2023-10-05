const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the content!";

container.appendChild(content);

/*red <p>*/
const redP = document.createElement("p");
redP.style.color = "red";
redP.textContent = "Hey, i`m red";
container.append(redP);

/* blue text h3*/
const h3Blue = document.createElement("h3");
h3Blue.style.color = "blue";
h3Blue.textContent = "i`m blue h3!";
container.append(h3Blue);

/*div*/
const div = document.createElement("div");
div.style.cssText = "border: solid black 2px; background-color: pink;";
const divH1 = document.createElement("h1");
divH1.textContent = "i`m in a div";
const divP = document.createElement("p");
divP.textContent = "ME TOO!";
div.appendChild(divH1);
div.appendChild(divP);

/*Putting all together*/
container.append(div);

