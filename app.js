//query selector ile resim klasını alıp resimlere atadık
const main = document.querySelector(".main")
const samsung = document.querySelector(".left")
const apple = document.querySelector(".right")
//burada sol kısma mouse üzerine geldiğinde classına avtive eklşyoruz
 samsung.addEventListener("mouseenter", function(){
    main.classList.add("active-left")
 }
 )
 //burada sağ kısmın içine mouse geldiğinde active class eklenir
 apple.addEventListener("mouseenter" , ()=>{
    main.classList.add("active-right")
 })
 //burada sol kısımdan mouse ayrılınca clasına active left kaldırılıyor
 samsung.addEventListener("mouseleave",()=>{
    main.classList.remove("active-left")
 })
  //burada sol kısımdan mouse ayrılınca clasına active left kaldırılıyor
  apple.addEventListener("mouseleave",()=>{
    main.classList.remove("active-right")
  })
// resimler.forEach(panel =>{

// //burada addvemlistener ile olay dinleme yapılır buradaki oy tıklama
// panel.addEventListener("click", function(){ 
    
//     removeActive()
//     panel.classList.add("active")
    
//         }
    
//     )
    

// })


//  function removeActive ( ) {
//     resimler.forEach(panel =>{
//         panel.classList.remove("active")
//     }
//  )}
// // panel.addevemtlistener("click",()
