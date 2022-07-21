// Write your code here!
const divElement = document.createElement("div");
document.body.append(divElement)

const ul = document.createElement("ul")
//document.div.append(ul)
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }
 divElement.append(ul)

 const mainText = document.getElementById("main");
mainText.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
  
  //Change Properties on DOM Nodes
  const mainElement=document.getElementById('main');
  mainElement.style.height="300px";
  mainElement.style.backgroundColor="#27647B";

  mainElement.textContent="You've changed what's on the screen!";
  mainElement.style.fontSize="24px";
  mainElement.style.marginLeft="30px"
  mainElement.style.lineHeight="2"

  mainElement.className="pet-listing dog"; //add class
  mainElement.classList.remove('dog');//remove class
  mainElement.classList.add("cat","sale");// add class list

  const ulElement = document.getElementsByTagName("ul")[0];
const secondChild = ulElement.querySelector("li:nth-child(2)");
ulElement.removeChild(secondChild);
ul.remove();


/////// Assignment//////////
mainElement.remove();
const newHeader= document.createElement("h1")
document.body.append(newHeader)
newHeader.id="victory";
newHeader.textContent="Chetna is the champion";