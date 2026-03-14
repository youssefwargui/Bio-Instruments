var produits = []

// var machine = [
//     {   
//         id : 1,
//         name : "architect" , 
//         pic : "https://www.corelaboratory.abbott/int/fr/offerings/brands/architect/architect-i2000SR/_jcr_content/root/container_2030815035/columncontrol/tab_item_no_0/image.coreimg.85.1024.png/1750334848623/architect-i2000-instrument-image-straight-500x500.png" , 
//         desc : "The Abbott ARCHITECT family is a premier series of automated, high-throughput laboratory analyzers from Abbott Core Laboratory that integrate clinical chemistry and immunoassay testing on a single platform. Designed for efficiency, they use common reagents and software to streamline workflows in various-sized laboratories"
//     },
//     {
//         id : 2,
//         name : "alinity" , 
//         pic : "https://clpmag.com/wp-content/uploads/2018/08/Abbott-Alinity-ci_crop1280x751p.jpg" , 
//         desc : "Abbott's Alinity is a family of next-generation, high-throughput diagnostic systems designed to improve laboratory efficiency and simplify operations. Featuring a uniform interface, they cover immunoassay, chemistry, hematology, molecular, and blood screening, offering, for example, up to 1,550 tests per hour on the Alinity ci-series."
//     }
// ]

var ol = document.querySelector("ol")
var input= document.getElementById("name")
var button = document.getElementById("btn")
var imginput =  document.getElementById("imgg")
var descinput = document.getElementById("descinput")
var inputsearch = document.getElementById("inputsearch")
var btnsearch = document.getElementById("btnsearch")


var divcard = document.getElementById("card-body")
var cardtitle = document.getElementById("card-title")
var cardtext = document.getElementById ("card-text")
var cardimg = document.getElementById("card-img")
var produits = JSON.parse(localStorage.getItem("produits")) || []

function afficheMachine() {
  ol.innerHTML = "";
  
  produits.forEach((el) => {
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.textContent = el.name;
   
  

  p.addEventListener("click" , function () {
    console.log(p);
    
cardtitle.textContent = el.name
cardimg.src = el.pic
cardtext.textContent = el.desc

document.body.append(divcard)




  })
var btndelete = document.createElement("button");
    btndelete.textContent = "delete";
    btndelete.onclick = () => {
      supprimer(el.id);
    };

  var modifier = document.createElement("button")
  modifier.textContent = "modifier"
  modifier.onclick = () => {
  var mdfN = document.createElement("input")
  var mdfI = document.createElement("input")
  var mdfD = document.createElement("input")

  var svg = document.createElement("button")
  svg.textContent ="sauvgarde"
  li.append(mdfN, mdfI , mdfD , svg)                          
svg.onclick = () => {
      modTache(el.id , mdfN.value , mdfI.value ,mdfD.value );
}
}
li.append(btndelete , modifier)
li.append(p)
ol.append(li)
  
  });
}


button.addEventListener("click" , function () {
    var autoId = crypto.randomUUID()
         if (input.value === "") {
        alert("Le champ est obligatoire")     
         
     }
     console.log(input.value , imginput.value , descinput.value);
     
    var product = {
        id : autoId , 
        name : input.value,
        pic : imginput.value , 
        desc : descinput.value
    }
    produits.push(product)
    localStorage.setItem("produits" , JSON.stringify(produits))
    
    
    input.value = ""
    imginput.value = ""
    descinput.value = ""

    afficheMachine()
    
})

afficheMachine()


function supprimer(id) {
    var tab = []
    for (i = 0 ; i<produits.length ; i++){
        if (produits[i].id !== id) {
            tab.push(produits[i])
        }
    }
    produits = tab
    localStorage.setItem("produits" , JSON.stringify(produits))
    if (produits.length===0) {
      divcard.innerHTML = ""
    }
        afficheMachine()
}


function modTache(id , name , img , ds ) {

produits = produits.map((el) => {

    if (el.id === id) {
    return   el = {
        id: el.id,
        name: name? name:el.name ,                  
        pic: img? img:el.pic,
        desc: ds? ds:el.desc,
      }}
     return el
 })
 
  localStorage.setItem("produits" , JSON.stringify(produits))

  afficheMachine();
}

btnsearch.addEventListener("click" , function (event) {
  event.preventDefault()
  var recherche = inputsearch.value
  var result =  produits.filter(function(el) {
    return el.name.toLowerCase().includes(recherche);
  })
 if (result.length){ 
  produits=result
  afficheMachine()
}
else(
  afficheMachine()
)
})













