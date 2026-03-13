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
var input= document.querySelector("input")
var button = document.getElementById("btn")
var imginput =  document.getElementById("imgg")
var descinput = document.getElementById("descinput")


var divcard = document.getElementById("card-body")
var cardtitle = document.getElementById("card-title")
var cardtext = document.getElementById ("card-text")
var cardimg = document.getElementById("card-img")
// var produits = JSON.parse(localStorage.getItem("produits")) || []

function afficheMachine() {
  ol.innerHTML = "";
  produits.forEach((el) => {
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.textContent = el.name;
    // localStorage.setItem("produits" , JSON.stringify(produits))
  ol.append(li)
  li.append(p)

  li.addEventListener("click" , function () {
    // var div = document.createElement("div")
    // var image = document.createElement("img")
    // var h1 = document.createElement("h1")
    
    

cardtitle.textContent = el.name
cardimg.src = el.pic
cardtext.textContent = el.desc
// div.append(image,h1)
// document.body.append(div)
var btndelete = document.createElement("button");
    btndelete.textContent = "delete";
    btndelete.onclick = () => {
      supprimer(el.id);
    };


li.append(btndelete)
  })
  });
}


button.addEventListener("click" , function () {
    var autoId = crypto.randomUUID()
    var product = {
        id : autoId , 
        name : input.value,
        pic : imginput.value , 
        desc : descinput.value
    }
    produits.push(product)
    // localStorage.setItem("produits" , JSON.stringify(produits))
    
    // produits.forEach(() => {
    //     if (input.value === "") {
    //     alert("Le champ est obligatoire")     NEQSA 
    //     return false
    // }
    // return true 
    // })
    

    input.value = ""
    imginput.value = ""
    descinput.value = ""



    afficheMachine()
    
})



function supprimer(id) {
    var tab = []
    for (i = 0 ; i<produits.length ; i++){
        if (produits[i].id !== id) {
            tab.push(produits[i])
        }
    }
    produits = tab
        afficheMachine()
}
supprimer()













