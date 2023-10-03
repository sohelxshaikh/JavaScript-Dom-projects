var istatus = document.querySelector("h5")
var btn = document.querySelector("button")
var addFriend = document.querySelector("#add")
var flag = 0
addFriend.addEventListener("click",function(){
    if(flag == 0){
        istatus.innerHTML = "Friends"
        istatus.style = "color:green;"
        flag = 1
        addFriend.style = "color:black;background-color:#dadada"
        addFriend.innerHTML = "Remove Friend"
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        addFriend.style = "background-color: cadetblue;color: #fff;"
        addFriend.innerHTML = "Add Friend"
        flag = 0
        }
    
})



