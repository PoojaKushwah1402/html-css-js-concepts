// window.addEventListener('storage', ()=>{
//     console.log('here')
//     console.log(window.localStorage.getItem('list'),'st list');
// })

window.onstorage = (e) => {
    console.log(e,'here')
    console.log(window.localStorage.getItem('list'),'st list');
}

console.log('initial')
localStorage.setItem('list',JSON.stringify([1,2,3,4,5]))

setTimeout(()=>{
    console.log('settimeout')
    localStorage.setItem('list',JSON.stringify([1,2]))
},5000)