var p = document.getElementById("green planet")
p.innerText = "An alien appeared"
p.innerHTML = "<b>An alien appeared</b>"

//putem seta stilul direct din js
// dar recomandarea este sa folosim css+clase
//p.style.color ="#64A4C5"
//p.style.backgroundColor = "rgb(230,210,200)"

//adauga o clasa elementului
p.classList.add("warning")

//pentru a sterge o clasa folosim remove in loc de add
//p.classlist.remove("remove")

var newElement = document.createElement("p")
newElement.innerText = "Hello there!"
//punem elementul in body la sfarsit
//document.querySelector("body").appendChild(newElement)
// punem elementul inaintea elementului p in body

p.before(newElement)

// sterge un element
document.querySelector("#blueplanet").remove()
// executa functia changeMessage cand se da click pe input
document.querySelector("input").addEventListener("click", changeMessage)

function changeMessage(){
 document.querySelector("#redplanet").classList.add("warning")

}
// e.append(element)- adauga la sfarsitul elementului e
// e.prepend (element)-adauga la inceputul elementului e
//e.before (element)-adauga inaintea de elementul e
//e.after (element)-adauga dupa elementul e
