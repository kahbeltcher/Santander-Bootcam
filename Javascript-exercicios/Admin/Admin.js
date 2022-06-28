function getAdmins(map){
    let admins=[];
    for([key,value] of map) {
        if(value ==='Admin'){
            admins.push(key);
        }
    }
return admins;
}
const usuarios = new Map();


usuarios.set('Luiz','Admin');
usuarios.set('Maria','Admin');
usuarios.set('Felipe','User');
usuarios.set('Amanda','Admin');

console.log(getAdmins(usuarios));