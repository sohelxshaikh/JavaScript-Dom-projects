var elem = document.querySelectorAll(".elem")
// var elemImg = document.querySelectorAll("#elem1 img")


// elem1.addEventListener("mouseenter" ,function(dets){ 
//     elemImg.style.opacity= 1
// })
// elem1.addEventListener("mouseleave" ,function(dets){ 
//     elemImg.style.opacity= 0
// })

 
elem.forEach(function(val){
    val.addEventListener("mouseenter" ,function(dets){ 
        val.childNodes[3].style.opacity=1
        })
    val.addEventListener("mouseleave" ,function(dets){ 
        val.childNodes[3].style.opacity=0
        })
    val.addEventListener("mousemove" ,function(dets){ 
        val.childNodes[3].style.left=dets.x + "px"
        })

    })
