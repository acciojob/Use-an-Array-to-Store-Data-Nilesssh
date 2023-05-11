let str = "";
let nice = [1,"hello", true , "nice", false];
nice.forEach(element => {
	str+=`<li>${element}</li>`;
})
let abc = `<ol>${str}</ol>`
document.getElementsByTagName("body")[0].innerHTML = abc ;