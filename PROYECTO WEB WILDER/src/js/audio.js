
const d= document
let bander= 1
export default function($audio,$sound,$ondas){
    const sound = d.querySelector($sound)
    const ondas = d.querySelector($ondas)
    sound.play()
    ondas.classList.add('anime-music')  
    d.addEventListener("click", e =>{
       
        if(e.target.matches($audio)){
            if(bander === 0){
                sound.play()
                bander=1    
                ondas.classList.add('anime-music')  
            }else if(bander === 1){
                sound.pause()
                ondas.classList.remove('anime-music') 
                bander=0
               
            }
           
        }
    })
    
    

}