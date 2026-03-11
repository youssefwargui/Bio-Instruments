var img = document.getElementById("slideshow");


var images  = ["https://clpmag.com/wp-content/uploads/2018/08/Abbott-Alinity-ci_crop1280x751p.jpg" , "https://www.corelaboratory.abbott/int/fr/offerings/brands/architect/architect-i2000SR/_jcr_content/root/container_2030815035/columncontrol/tab_item_no_0/image.coreimg.85.1024.png/1750334848623/architect-i2000-instrument-image-straight-500x500.png" , "https://en.lifotronic.com/vancheerfile/Images/2022/8/20220812165717778.png" , "https://5.imimg.com/data5/SELLER/Default/2023/5/310904708/KE/ZZ/MP/2305501/thermo-fisher-indiko-clinical-and-specialty-chemistry-system.jpg"] 
var counter = 1 
setInterval(function () {
  if (counter === images.length) {
    counter = 0
  }
  document.body.style.backgroundImage = "url('" + images[counter] + "')"
  counter++
}, 3000)

