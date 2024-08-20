
let timer = null;

document.getElementById("start").addEventListener('click',()=>{

    clearInterval(timer)
    let valeur = parseInt(document.getElementById("inp").value)
    if (isNaN(valeur)) {
        alert("veillez saisir une valeur exacte!")
        return
        
    }
    if (valeur<=0) {
        alert("veillez saisir une valeur exacte!")
        return
    }
    let total_second = valeur*60;
    timer = setInterval(() => {
        let minute = Math.floor(total_second/60)
        let second = total_second%60
        let cour = document.getElementById("rebour").textContent = `00 : ${minute} : ${second}`
        if (total_second<=0) {
            alert("temps ecrouler")
            timer=null
            return
            
        }else{
            total_second--
        }
        
    },1000);
})


document.getElementById("CAPPUCINO").addEventListener('click',()=>{
    clearInterval(timer)
    let total_second = 5*60;
    timer =setInterval(() => {  
        let minute = Math.floor(total_second/60)
        let second = total_second%60
        let cour = document.getElementById("rebour").textContent = `00 : ${minute} : ${second}`
        if (total_second<=0) {
            alert("temps ecrouler")
            timer=null
            return
            
        }else{
            total_second--
        }
        
    },1000);
}
)
document.getElementById("15-Mn").addEventListener('click',()=>{
    clearInterval(timer)
    let total_second = 15*60;
    timer =setInterval(() => {
        let minute = Math.floor(total_second/60)
        let second = total_second%60
        let cour = document.getElementById("rebour").textContent = `00 : ${minute} : ${second}`
        if (total_second<=0) {
            alert("temps ecrouler")
            timer=null
            return
            
        }else{
            total_second--
        }
        
    },1000);
}
)
document.getElementById("dejeuner").addEventListener('click',()=>{
    clearInterval(timer)
    let total_second = 20*60;
    timer = setInterval(() => {
        let minute = Math.floor(total_second/60)
        let second = total_second%60
        let cour = document.getElementById("rebour").textContent = `00 : ${minute} : ${second}`
        if (total_second<=0) {
            clearInterval(timer)
            alert("temps ecrouler")
            timer=null
            return
            
        }else{
            total_second--
        }
        
    },1000);
}
)
document.getElementById("D-30").addEventListener('click',()=>{
    
        clearInterval(timer)
   
    let total_second = 30*60;
    timer =setInterval(() => {
        let minute = Math.floor(total_second/60)
        let second = total_second%60
        let cour = document.getElementById("rebour").textContent = `00 : ${minute} : ${second}`
        if (total_second<=0) {
            clearInterval(timer)
            alert("temps ecrouler");
            timer=null
            return
            
        }else{
            total_second--
        }
        
    },1000);
}
)

document.getElementById("secs").addEventListener('click',()=>{
    let total_second = 20;
    
        clearInterval(timer)
  
    timer = setInterval(() => {
        let minute = Math.floor(total_second/60)
        let second = total_second%60
        let cour = document.getElementById("rebour").textContent = `00 : ${minute} : ${second}`
        if (total_second<=0) {
            clearInterval(timer)
            alert("temps ecrouler");
            timer=null
           return
            
        }else{
            total_second--
        }
        
    },1000);
}
)








// let timer = null;
// document.getElementById("start").addEventListener('click',()=>{
//     clearInterval(timer)
//     let valeur = parseInt(document.getElementById(inp).value)
//     if (isNaN(valeur)) {
//         alert('veillez saisir le nombre exacte')
//         return
        
//     }
//     if (valeur<=0) {
//         alert('veillez saisir le nombre exacte')
//         return
        
//     }
     
//     total_second = valeur * 60
//     timer = setInterval(() => {
//         let minute = Math.floor(total_second/60)
//         let second = total_second%60
//         let cour = document.getElementById('rebour').textContent = `00: ${minute}:${second}`
//         if (total_second<=0) {
//             clearInterval(timer)
//             alert('stop')
//             timer = null
//             return
            
//         }else{
//             total_second--

//         }

//     }, 1000);


// }

// )
// document.getElementById('dejeuner').addEventListener('click',()=>{
//     clearInterval(timer)
//     total_second = 20*60
//     timer = setInterval(() => {
//         let minute = Math.floor(total_second/60)
//         let second = total_second%60
//         let cour = document.getElementById('rebour').textContent = `00: ${minute}:${second}`
//         if ( total_second<=O) {
//             clearInterval(timer)
//             timer = null
//             alert('stop')
//             return

            
//         }else{
//             total_second--
//         }
        
//     }, 1000);

// }

// )




























