
let timer = null;

const Aujourdhui = new Date();
// let heureActuelle = Aujourdhui.getHours() + ' : ' + Aujourdhui.getMiutes() + ' : ' + Aujourdhui.getSeconds();
// console.log(heureActuelle);
let back = document.getElementById('back');
let inputTim = document.getElementById("inp");

document.getElementById("inp").addEventListener('keydown', () => {
    clearInterval(timer);
    let valeur = parseInt(inputTim.value);
    inputTim.value = "";

    if (isNaN(valeur) || valeur <= 0) {
        alert("Veuillez saisir une valeur exacte et positive!");
        return;
    }

    let total_second = valeur * 60;

    timer = setInterval(() => {
        let heure = Math.floor(total_second / 3600);
        let minute = Math.floor((total_second % 3600) / 60);
        let second = Math.floor(total_second % 60);
        
        document.getElementById("rebour").textContent = `${heure.toString().padStart(2, '0')} : ${minute.toString().padStart(2, '0')} : ${second.toString().padStart(2, '0')}`;
        
        if (total_second <= 0) {
            clearInterval(timer);
            alert("Temps écoulé!");
            return;
        } else {
            total_second--;
        }

        // Calculate the end time
        let end_time = new Date(Aujourdhui.getTime() + (valeur * 60 * 1000));
        
        // Update back.innerText with the end time
        back.innerText = `Be Back At ${end_time.getHours().toString().padStart(2, '0')} : ${end_time.getMinutes().toString().padStart(2, '0')} : ${end_time.getSeconds().toString().padStart(2, '0')}`;
        
    }, 1000);
});



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
        let end_time = new Date(Aujourdhui.getTime() + (5 * 60 * 1000));
        
        // Update back.innerText with the end time
        back.innerText = `Be Back At ${end_time.getHours().toString().padStart(2, '0')} : ${end_time.getMinutes().toString().padStart(2, '0')} : ${end_time.getSeconds().toString().padStart(2, '0')}`;
        
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
        let end_time = new Date(Aujourdhui.getTime() + ( 15 * 60 * 1000));
        
        // Update back.innerText with the end time
        back.innerText = `Be Back At ${end_time.getHours().toString().padStart(2, '0')} : ${end_time.getMinutes().toString().padStart(2, '0')} : ${end_time.getSeconds().toString().padStart(2, '0')}`;
        
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
            let cour = document.getElementById('rebour').textContent = null
            back.innerText = null
            
            clearInterval(timer)
            alert("temps ecrouler")
            timer=null
            return
            
        }else{
            total_second--
        }
        let end_time = new Date(Aujourdhui.getTime() + (20 * 60 * 1000));
        
        // Update back.innerText with the end time
        back.innerText = `Be Back At ${end_time.getHours().toString().padStart(2, '0')} : ${end_time.getMinutes().toString().padStart(2, '0')} : ${end_time.getSeconds().toString().padStart(2, '0')}`;
        
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
        if (total_second<=0){
            clearInterval(timer)
            let cour = document.getElementById('rebour').textContent = null
            back.innerText = null
            
            alert("temps ecrouler");
            timer=null
            return
            
        }else{
            total_second--
        }
        let end_time = new Date(Aujourdhui.getTime() + (30 * 60 * 1000));
        
        // Update back.innerText with the end time
        back.innerText = `Be Back At ${end_time.getHours().toString().padStart(2, '0')} : ${end_time.getMinutes().toString().padStart(2, '0')} : ${end_time.getSeconds().toString().padStart(2, '0')}`;
        
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
            let cour = document.getElementById('rebour').textContent = null
            back.innerText = null
            
            // alert("temps ecrouler");
            timer=null
           return
         
            
        }else{
            total_second--
        }
        back.innerText = `Be Back At  ${Aujourdhui.getHours()} : ${Aujourdhui.getMinutes()} : 20`
      
        
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




























