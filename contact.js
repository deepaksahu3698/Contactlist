disInfo()
function disInfo(){
    var tbody=document.querySelector("tbody")
tbody.innerHTML=""
var contlis=JSON.parse(localStorage.getItem("contactList"))
// console.log(contlis)
contlis.forEach(e => {
    var tr=document.createElement("tr")
    tr.setAttribute("id","tr")
    var td1=document.createElement("td")
    var td2=document.createElement("td")
    var td3=document.createElement("td")
var fvo=document.createElement("a")
td1.innerText=e.name
td2.innerText=e.number
td3.innerText=e.type
fvo.innerText="Add to Fav"
fvo.setAttribute("id","a")
fvo.addEventListener("click",function(){
    let fav=localStorage.getItem("favourites")?JSON.parse(localStorage.getItem("favourites")):[];
    fav.push(e)
    localStorage.setItem("favourites",JSON.stringify(fav))
    alert("Add to favourites successfully")
})
tr.append(td1,td2,td3,fvo)
tbody.append(tr)
});

}