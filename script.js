let str = "";
let nice = [1,"hello", true , "nice", false];
nice.forEach(element => {
	str+=`<li>${element}</li>`;
})
document.getElementsByTagName("ol")[0].innerHTML = str ;