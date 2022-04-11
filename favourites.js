disfav()
function disfav(){
    var tbody=document.querySelector("tbody")
tbody.innerHTML=""
var contlis=JSON.parse(localStorage.getItem("favourites"))
// console.log(contlis)
contlis.forEach(e => {
    var tr=document.createElement("tr")
    tr.setAttribute("id","tr")
    var td1=document.createElement("td")
    var td2=document.createElement("td")
    var td3=document.createElement("td")

td1.innerText=e.name
td2.innerText=e.number
td3.innerText=e.type


tr.append(td1,td2,td3)
tbody.append(tr)
});
}