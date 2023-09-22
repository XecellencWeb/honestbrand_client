export const authBox = (status,message,time)=>{
    const parent = document.querySelector('#authBox')
    const box = document.createElement('div')
    box.setAttribute('class','--auth-message')
    parent.appendChild(box)
    if(status === 200){
        box.innerHTML = ''
        box.innerHTML += `<div class='success'>Success!!!</div><div>${message}</div>`
    }else if(status === 500){
        box.innerHTML = ''
        box.innerHTML += `<div class='fair'>Internal!!!</div><div>${message}</div>`
    }else if(status === 102){
        box.innerHTML = ''
        box.innerHTML += `<div class='--loading'><div class='--box'></div></div><div>loading......</div>`
    }
    else{
        box.innerHTML = ''
        box.innerHTML += `<div class='failed'>Failed!!!</div><div>${message}</div>`
    }
    setTimeout(()=>{
        if(parent.children.length > 1){
            parent.innerHTML = ''
        }
    },time+1100 || 6100)
    if(message)setTimeout(()=>{
        box.style.animation = 'fade 1s linear forwards'
        setTimeout(()=>{
            box.remove()},1200
        )
    },time || 5000)
}