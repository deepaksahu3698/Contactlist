

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()
    var name=document.getElementById("name").value
    var number=document.getElementById("number").value
    var type=document.getElementById("sel").value
    // console.log(name,number,type)

    let arr=localStorage.getItem("contactList")?JSON.parse(localStorage.getItem("contactList")):[];
    var obj={}
    obj.name=name
    obj.number=number
    obj.type=type
    arr.push(obj)
    localStorage.setItem("contactList",JSON.stringify(arr))
    alert("Add contact successfully")
    // document.getElementById("name").innerHTML=""
    // document.getElementById("number").innerHTML=""
    // document.getElementById("sel").innerHTML=""
   
    
    location.reload()

});
