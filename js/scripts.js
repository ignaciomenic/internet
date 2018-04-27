var users = [
    {
        name: 'jose',
        lastname: 'perez',
        age: 21,
        children: ['pedro','juan','lola'],
        email: 'jp@mail.com',
    },
    {
        name: 'maria',
        lastname: 'dominguez',
        age: 33,
        children: ['ivan', 'martina'],
        email: 'maria.d@mail.com',
    },
    {
        name: 'juan',
        lastname: 'garcia',
        age: 45,
        children: [],
        email: 'jgarcia@mail.com',
    },
    {
        name: 'Carla',
        lastname: 'gimenez',
        age: 35,
        children: ['guillermo'],
        email: 'carlagimenez@mail.com',
    }
    ]
function filterByAge(age){
    for(var i=0; i < users.length; i++){
        if( age > users[i].age ){
        console.log( assamble( users[i] ) );
     }
    }    
}



     function assamble(user){
        return user.lastaname 
        + ' , ' 
        + user.name 
        + ' tiene ' 
        + user.children.length + ' hijos';
     }