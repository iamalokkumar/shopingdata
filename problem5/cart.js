

let cart_dat=JSON.parse(localStorage.getItem("cart_data"))||[]




let data=()=>{
    if(cart_dat){
  cart_dat.map((elem,ind)=>{
let div=document.createElement("div")
div.setAttribute("class","div")
let img=document.createElement("img")
img.src=elem.image_url
let p=document.createElement("p")
p.innerText=elem.name
let p2=document.createElement("p")
p2.innerText=`Price - ${elem.price}`
p2.setAttribute("class","p2")
let deletes=document.createElement("button")
deletes.setAttribute("class","delete")
deletes.addEventListener("click",()=>{
    deleteItem(elem,ind)
})
deletes.innerText="Remove"

div.append(img,p,p2,deletes)
    document.getElementById("cart").append(div)
  })

 let deleteItem=(elem,ind)=>{
     cart_dat.splice(ind,1)
     localStorage.setItem("cart_data",JSON.stringify(cart_dat))
     alert("One Item Removed From Your Cart")
     window.location.reload()
 } 
}
}

data()