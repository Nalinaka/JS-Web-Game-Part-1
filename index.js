function newImage (url,left,bottom) {
let object = document.createElement('img')
object.src = 'assets/green-character.gif'
object.style.position = 'fixed'
object.style.left = '100px'
object.style.bottom = '100px'
document.body.append(object)
return object
}

newImage() // Logs new image 
newImage() // Logs new image again 

function newImage(url,left,bottom) {
let object = newImage(url,left,bottom)
object.addEventListener('dblclick', () => {
    object.remove()
})
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pinetree = document.createElement('img')
pinetree.src = 'assets/pine-tree.png'
pinetree.style.position = 'fixed'
pinetree.style.left = '450px'
pinetree.style.bottom = '200px'
document.body.append(pinetree)

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

let newImage
document.createElement.
