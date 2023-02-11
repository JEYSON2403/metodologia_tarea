

let world = ['s','o','n','a','c','n','e','u','c'];

for( let i = 0; i< (world.length - 1)/ 2; i++) {

    let aux = world[i];
    world[i]= world[world.length-i-1];
    world[world.length-i-1]= aux;


}
console.log(world);