let map=document.getElementById('map')
let pirate=document.getElementById('pirate')

map.onclick=function(event){
    console.log('You have found the treasure!');
    pirate.style.left=event.offsetX-20+'px'
    pirate.style.top=event.offsetY-40+'px'
}