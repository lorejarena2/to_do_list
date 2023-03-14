const general=document.querySelector('.guarda')
const mostrar=document.getElementById('traer')
mostrar.value=""
let cont=1
let lleva=0
const value=document.createElement('div')
value.className="siempre"
value.textContent=("0 Tareas pendientes 0 resueltas")
general.appendChild(value)




    agregar.addEventListener('click',()=>{
        if(mostrar.value==""){
            vacio()
        }else{
            const contenedor=document.createElement('div')
            const item=document.createElement('div')
            const imagen=document.createElement('img')
            const cont_img=document.createElement('div')
            contenedor.className='conte_item'
            item.className='item'
            item.textContent=mostrar.value
            cont_img.className='eliminar'
            imagen.className='ima'
            imagen.id="imag"
            imagen.src='./eliminar.png'
            cont_img.append(imagen)
            contenedor.append(item,cont_img)
            general.appendChild(contenedor)
            value.textContent=(cont+" Tareas pendientes "+ lleva +" resueltas")
            general.appendChild(value)
            mostrar.value=""
            console.log('agregar')
            console.log(cont+'CONTA')    
            cont++
        }
   
    }
    )


general.addEventListener('click',(event)=>{
    cont--
    if(event.target.id=='imag'){
    const padre=event.target.parentElement.parentElement
    general.removeChild(padre)
    value.textContent=((cont-1) +" Tareas pendientes "+ (lleva+1) +" resueltas")
    general.appendChild(value)
    lleva++
    
    
}
})

function vacio(){
    alerta.style.display="flex"
    setTimeout(()=>{
    alerta.style.display="none"
    },1000)

}

